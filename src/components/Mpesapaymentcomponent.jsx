import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Mpesapaymentcomponent = () => {
  const navigate = useNavigate();
  const imagepath = "https://bombadir.pythonanywhere.com/static/images/";
  const loc = useLocation();
  const navState = loc.state || {};
  const { product } = navState || {};
  const cartFromState = navState.cart || null;
  const totalFromState = navState.total || null;

  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(""); // New state for user location
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [amount, setAmount] = useState(product ? Number(product.product_cost) : (totalFromState || 0));
  const [cart, setCart] = useState(cartFromState || []);

  useEffect(() => {
    if (cartFromState && totalFromState) {
      setCart(cartFromState);
      setAmount(Number(totalFromState));
      return;
    }
    if (product) {
      setAmount(Number(product.product_cost));
      setCart([]);
      return;
    }
    // fallback to localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('cart') || '[]');
      if (stored && stored.length) {
        setCart(stored);
        const total = stored.reduce((s, i) => s + i.qty * i.price, 0);
        setAmount(total);
      }
    } catch (e) {
      // ignore
    }
  }, [product, cartFromState, totalFromState]);
  // Replace these with your EmailJS details
  const EMAILJS_SERVICE_ID = "service_f5ysmxh";
  const EMAILJS_TEMPLATE_ID = "template_shc2fh6";
  const EMAILJS_PUBLIC_KEY = "fm22xbY5U5AkcrACG";

  // Function to send email notification
  const sendEmailNotification = () => {
    const templateParams = {
      product_name: product ? product.product_name : 'Cart Checkout',
      product_cost: amount,
      phone,
      location,
      payment_method: paymentMethod === "mpesa" ? "M-PESA" : "Pay on Delivery",
      cart: cart && cart.length ? JSON.stringify(cart) : '',
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => console.log("Email sent successfully!", response.text),
        (err) => console.error("Email sending failed.", err)
      );
  };

  // M-PESA payment
  const submitMpesa = async (e) => {
    e.preventDefault();
    if (!location) {
      setError("Please enter your location.");
      return;
    }

    setLoading("Please wait...");
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();
      formdata.append("phone", phone);
      formdata.append("amount", amount);

      const response = await axios.post(
        "https://ryw.pythonanywhere.com/api/mpesa_payment",
        formdata
      );

      setLoading("");
      setSuccess(response.data.message);

      // Send email notification
      sendEmailNotification();

      // Clear cart and redirect after success
      setTimeout(() => {
        localStorage.removeItem('cart');
        window.dispatchEvent(new Event('cartUpdated'));
        navigate('/Home2');
      }, 2000);
    } catch (err) {
      setLoading("");
      setError("Payment failed. Try again.");
    }
  };

  // Pay on Delivery
  const payOnDelivery = () => {
    if (!location) {
      setError("Please enter your location.");
      return;
    }

    if (!phone) {
      setError("Please enter your phone number.");
      return;
    }

    setSuccess(
      "Order placed successfully! You will pay upon delivery."
    );
    setError("");

    // Send email notification
    sendEmailNotification();

    // Clear cart and redirect after success
    setTimeout(() => {
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('cartUpdated'));
      navigate('/');
    }, 2000);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 card shadow mt-4 p-3">
        
        {/* SUCCESS STATE - Show confirmation and Continue Shopping button */}
        {success ? (
          <div className="text-center py-5">
            <div className="mb-4">
              <i className="fas fa-check-circle text-success" style={{ fontSize: '3rem' }}></i>
            </div>
            <h3 className="text-success mb-3">✓ {success}</h3>
            <p className="text-muted mb-4">Thank you for your order! We will be in touch soon.</p>
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/Home2')}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {product ? (
          <>
            <img
              src={imagepath + product.product_photo}
              alt=""
              className="w-100 mb-3"
            />

            <h3>{product.product_name}</h3>
            <b className="text-success">Ksh {product.product_cost}</b>
          </>
        ) : (
          <>
            <h4>Cart Checkout</h4>
            {cart.length === 0 ? (
              <p className="text-muted">No items in cart.</p>
            ) : (
              <div>
                {cart.map(item => (
                  <div key={item.id} className="d-flex mb-3 align-items-center">
                    <img src={imagepath + item.photo} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover' }} className="me-3 rounded" />
                    <div className="flex-grow-1">
                      <strong>{item.name}</strong>
                      <div className="small text-muted">ksh {item.price} × {item.qty} = ksh {item.qty * item.price}</div>
                    </div>
                  </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>Total:</strong>
                  <strong>ksh {amount}</strong>
                </div>
              </div>
            )}
          </>
        )}

        <hr />

        {/* Location input */}
        <input
          type="text"
          placeholder="Enter your location"
          className="form-control mb-2"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          required
        />

        {/* Payment method selection */}
        <h5>Select Payment Method</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            checked={paymentMethod === "mpesa"}
            onChange={() => setPaymentMethod("mpesa")}
          />
          <label className="form-check-label">Pay Now (M-PESA)</label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            checked={paymentMethod === "delivery"}
            onChange={() => setPaymentMethod("delivery")}
          />
          <label className="form-check-label">Pay on Delivery</label>
        </div>

        {/* M-PESA form */}
        {paymentMethod === "mpesa" && (
          <form onSubmit={submitMpesa}>
            <input
              type="number"
              placeholder="Enter phone number 2547XXXXXXXX"
              className="form-control mb-2"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
            <button className="btn btn-success w-100">Pay Now</button>
          </form>
        )}

        {/* Pay on Delivery */}
        {paymentMethod === "delivery" && (
          <div>
            <input
              type="number"
              placeholder="Enter phone number 2547XXXXXXXX"
              className="form-control mb-2"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
            <button
              className="btn btn-primary w-100"
              onClick={payOnDelivery}
            >
              Confirm Pay on Delivery
            </button>
          </div>
        )}

        {/* Messages */}
        <h5 className="text-warning mt-3">{loading}</h5>
        <h5 className="text-danger">{error}</h5>
          </>
        )}
      </div>
    </div>
  );
};

export default Mpesapaymentcomponent;
