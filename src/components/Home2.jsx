import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Toast, ToastContainer } from 'react-bootstrap';

const Home2 = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState(""); // Search state
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const imagepath = "https://bombadir.pythonanywhere.com/static/images/";

  // Fetch latest products
  const getFeaturedProducts = async () => {
    setLoading("Loading products...");
    try {
      const response = await axios.get(
        "https://bombadir.pythonanywhere.com/api/getproductsbometonlinesoko"
      );
      setFeaturedProducts(response.data.slice(0, 8)); // Show only latest 8 products
      setLoading("");
    } catch (err) {
      setError("Failed to load products");
      setLoading("");
    }
  };

  useEffect(() => {
    getFeaturedProducts();
    // load cart from localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(stored);
    } catch (e) {
      setCart([]);
    }
  }, []);

  // Filter products based on search
  const filteredProducts = featuredProducts.filter(product =>
    product.product_name.toLowerCase().includes(search.toLowerCase()) ||
    product.product_description.toLowerCase().includes(search.toLowerCase())
  );

  // CART HELPERS
  const saveCart = (nextCart) => {
    setCart(nextCart);
    localStorage.setItem('cart', JSON.stringify(nextCart));
    // dispatch custom event to notify other components of cart update
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
    // show small toast confirmation
    setToastMessage(`${product.product_name} added to cart`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
 useEffect(() => {
    document.title = "Home";
  }, []);

  // Testimonials data
  

  return (
    <section>

      {/* HERO SECTION - Smaller */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: '45vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("pictures/home background img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="text-center">
          <h1 className="display-5 fw-bold ">Welcome to South Rift Online Soko</h1>
          <p className="lead fs-5"> Trusted online store delivering quality products across Kenya</p>
        </div>
      </div>

        {/* Product Variety Carousel */}
        <div id="homeProductCarousel" className="carousel slide my-3" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#homeProductCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Home Appliances"></button>
            <button type="button" data-bs-target="#homeProductCarousel" data-bs-slide-to="1" aria-label="Kitchen Ware"></button>
            <button type="button" data-bs-target="#homeProductCarousel" data-bs-slide-to="2" aria-label="Motor Vehicles"></button>
            <button type="button" data-bs-target="#homeProductCarousel" data-bs-slide-to="3" aria-label="Agricultural Products"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="pictures\home aplliance.jpg"
                    className="d-block w-100 rounded"
                    alt="Home Appliances"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="p-3">
                    <h5 className="text-success">Home Appliances</h5>
                    <p className="text-muted small">
                      High-quality appliances for your home. From refrigerators to washing machines, we have everything you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="pictures\utensils.jpg"
                    className="d-block w-100 rounded"
                    alt="Kitchen Ware"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="p-3">
                    <h5 className="text-success">Kitchen Ware</h5>
                    <p className="text-muted small">
                      Premium kitchen utensils and cookware. Quality products at competitive prices for everyday cooking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="pictures\carsale.jpg"
                    className="d-block w-100 rounded"
                    alt="Motor Vehicles"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="p-3">
                    <h5 className="text-success">Motor Vehicles</h5>
                    <p className="text-muted small">
                      Quality cars and motor vehicles for personal and commercial use. Delivered safely with trusted sellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="pictures\cowimg.jpg"
                    className="d-block w-100 rounded"
                    alt="Agricultural Products"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="p-3">
                    <h5 className="text-success">Agricultural Products</h5>
                    <p className="text-muted small">
                      Fresh farm produce and tools. Directly sourced and delivered worldwide supporting local farmers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#homeProductCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#homeProductCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      

      {/* SEARCH BAR */}
      <div className="container my-2">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-success text-white">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search products..."
                className="form-control"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED PRODUCTS - Grid Style Like GetProducts */}
      <div className="container my-3">
        <h5 className="text-center mb-3">Latest Products</h5>
        {loading && <p className="text-center text-warning small">{loading}</p>}
        {error && <p className="text-center text-danger small">{error}</p>}
        <div className="row g-2">
          {filteredProducts.length === 0 && !loading ? (
            <p className="text-center text-muted small">No products found</p>
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} className="col-md-4 col-sm-6">
                <div className="card shadow-sm h-100 product-card border-0">
                  <div className="position-relative">
                    <img
                      src={imagepath + product.product_photo}
                      className="card-img-top"
                      alt={product.product_name}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <span className="badge bg-success position-absolute top-0 start-0 m-1 small">
                      New
                    </span>
                  </div>
                  <div className="card-body p-2 text-center d-flex flex-column">
                    <h6 className="fw-bold small mb-1">{product.product_name}</h6>
                    <p className="text-muted small flex-grow-1 mb-2">
                      {product.product_description.length > 40
                        ? product.product_description.substring(0, 40) + "..."
                        : product.product_description}
                    </p>
                    <b className="text-primary small mb-2">
                      Ksh {product.product_cost}
                    </b>
                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-primary btn-sm small flex-grow-1"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-success btn-sm small flex-grow-1"
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
              </div>
            ))
          )}
        </div>
        <div className="text-center mt-2">
          <a href="/Getproducts" className="btn btn-primary btn-sm">
            View All Products
          </a>
        </div>
      </div>

      {/* Toast */}
      <ToastContainer position="top-end" className="p-3" style={{ position: 'fixed', top: 80, right: 20 }}>
        <Toast bg="dark" onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
          <Toast.Header>
            <strong className="me-auto">Cart</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* TESTIMONIALS - Removed for Compactness */}

      {/* FOOTER */}
      <Footer />

      {/* STYLES */}
      <style jsx>{`
        .product-card:hover {
          transform: translateY(-3px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
};

export default Home2;
