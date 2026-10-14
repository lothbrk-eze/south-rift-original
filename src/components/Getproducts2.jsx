import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Toast, ToastContainer, Fade } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

const Getproducts2 = () => {
  const navigate = useNavigate();

  // states
  const [loading, setLoading] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [fadeError, setFadeError] = useState(true);

  const imagepath = "https://bombadir.pythonanywhere.com/static/images/";

  // fetch products
  const getProducts = async () => {
    setLoading("Loading products...");
    setFadeError(false);
    setError("");
    try {
      const response = await axios.get(
        "https://bombadir.pythonanywhere.com/api/getproductsbometonlinesoko"
      );
      setProducts(response.data);
      setLoading("");
      setFadeError(true);
    } catch (err) {
      setLoading("");
      setError("Failed to load products. Please try again.");
      setFadeError(true);
    }
  };

  useEffect(() => {
    getProducts();
    // load cart from localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(stored);
    } catch (e) {
      setCart([]);
    }
  }, []);

  // search filter
  const filteredProducts = products.filter(item =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  // CART HELPERS
  const saveCart = (nextCart) => {
    setCart(nextCart);
    localStorage.setItem('cart', JSON.stringify(nextCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const addToCart = (product) => {
    const existing = cart.find(i => i.id === product.id);
    let nextCart = [];
    if (existing) {
      nextCart = cart.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
    } else {
      nextCart = [...cart, { id: product.id, name: product.product_name, price: Number(product.product_cost), photo: product.product_photo, qty: 1 }];
    }
    saveCart(nextCart);
    setToastMessage(`${product.product_name} added to cart`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const removeFromCart = (id) => {
    const next = cart.filter(i => i.id !== id);
    saveCart(next);
  };

  const changeQty = (id, delta) => {
    const next = cart.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i).filter(Boolean);
    saveCart(next);
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.price, 0);
 useEffect(() => {
    document.title = "south rift online soko get products";
  }, []);


  return (
    <div className='row'>

      {/* Cart button */}
      <div className="col-12 d-flex justify-content-end align-items-center p-2">
        <button className="btn btn-outline-primary d-flex align-items-center" onClick={() => setShowCart(true)}>
          <FaShoppingCart className="me-2" /> Cart ({cartCount})
        </button>
      </div>

      {/* Search */}
      <div className="row justify-content-center mt-3 mb-3">
        <input
          type="search"
          className="form-control w-50"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="col-12 text-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">{loading}</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="col-12 mt-4 text-center">
          <Fade in={fadeError}>
            <div className="alert alert-danger d-inline-block">
              {error}{" "}
              <button className="btn btn-sm btn-outline-light ms-2" onClick={getProducts}>
                Retry
              </button>
            </div>
          </Fade>
        </div>
      )}

      {/* Products */}
      {!loading && !error && filteredProducts.map(product => (
        <div key={product.id} className='col-md-3 mt-4 card shadow p-2'>
          <div className='card-body'>
            <img
              src={imagepath + product.product_photo}
              alt=""
              className='w-100'
              style={{ height: 180, objectFit: 'cover' }}
            />
            <b className="text-info">{product.product_name}</b>
            <p className="small">{product.product_description}</p>
            <b className='text-success'>ksh {product.product_cost}</b>

            <div className="d-flex gap-2 mt-2">
              <button
                className="btn btn-primary flex-grow-1"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-success flex-grow-1"
                onClick={() =>
                  navigate('/makepayment', {
                    state: {
                      product: product,
                      amount: product.product_cost,
                      productName: product.product_name
                    }
                  })
                }
              >
                Order
              </button>
            </div>

          </div>
        </div>
      ))}

      {/* Cart Panel */}
      {showCart && (
        <div style={{ position: 'fixed', top: 80, right: 20, width: 360, maxHeight: '75vh', overflowY: 'auto', zIndex: 1050 }}>
          <div className="card shadow">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Your Cart</strong>
              <div>
                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => setShowCart(false)}>Close</button>
                <button className="btn btn-sm btn-danger" onClick={() => { localStorage.removeItem('cart'); setCart([]); }}>Clear</button>
              </div>
            </div>
            <div className="card-body">
              {cart.length === 0 ? (
                <p className="text-muted">Your cart is empty</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="d-flex mb-3 align-items-center">
                    <img src={imagepath + item.photo} alt="" style={{ width: 64, height: 64, objectFit: 'cover' }} className="me-2 rounded" />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <div>
                          <strong className="small">{item.name}</strong>
                          <div className="small text-muted">ksh {item.price}</div>
                        </div>
                        <div className="text-end">
                          <div className="btn-group btn-group-sm" role="group">
                            <button className="btn btn-outline-secondary" onClick={() => changeQty(item.id, -1)}>-</button>
                            <button className="btn btn-light" disabled>{item.qty}</button>
                            <button className="btn btn-outline-secondary" onClick={() => changeQty(item.id, +1)}>+</button>
                          </div>
                          <div>
                            <button className="btn btn-link btn-sm text-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong>Total:</strong>
                <strong>ksh {cartTotal}</strong>
              </div>
              <div className="d-grid">
                <button className="btn btn-success" onClick={() => { setShowCart(false); navigate('/makepayment', { state: { cart, total: cartTotal } }); }} disabled={cart.length === 0}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <ToastContainer position="top-end" className="p-3" style={{ position: 'fixed', top: 80, right: 20 }}>
        <Toast bg="dark" onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
          <Toast.Header>
            <strong className="me-auto">Cart</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Getproducts2;
