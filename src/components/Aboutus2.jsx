import React from 'react';
import { useEffect } from "react";

const AboutUs2 = () => {

 useEffect(() => {
    document.title = "south rift online soko About Us";
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">About Us</h1>

      {/* Who We Are */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img
            src="pictures\onlinestore.jpg" // Replace with your store image
            alt="Southrift Online Soko"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-dark">Who We Are</h3>
          <p className="text-muted">
            <strong>Southrift Online Soko</strong> is a trusted online store delivering goods nationwide and worldwide. 
            We sell a wide variety of products including <strong>home appliances, kitchen ware, motor vehicles, and agricultural products</strong>. 
            Our mission is to make shopping convenient, safe, and accessible to all customers.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src="pictures\quality produtcs.jpg" // Replace with a product variety image
            alt="Product Variety"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3 className="text-dark">Our Mission</h3>
          <p className="text-muted">
            To provide a wide range of quality products at competitive prices, with reliable delivery worldwide. 
            We aim to make online shopping simple, enjoyable, and secure, connecting customers with trusted products from verified suppliers.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <h3 className="text-center text-success mb-4">Why Choose Southrift Online Soko?</h3>
      
      {/* Product Variety Carousel */}
      <div id="productCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Home Appliances"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="1" aria-label="Kitchen Ware"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="2" aria-label="Motor Vehicles"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="3" aria-label="Agricultural Products"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="pictures\home aplliance.jpg"
                  className="d-block w-100 rounded"
                  alt="Home Appliances"
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-4">
                  <h4 className="text-success">Home Appliances</h4>
                  <p className="text-muted">
                    High-quality appliances for your home, carefully selected for performance and durability. 
                    From refrigerators to washing machines, we have everything you need.
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
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-4">
                  <h4 className="text-success">Kitchen Ware</h4>
                  <p className="text-muted">
                    Premium kitchen utensils, cookware, and dining essentials for your home. 
                    Quality products at competitive prices for everyday cooking and entertaining.
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
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-4">
                  <h4 className="text-success">Motor Vehicles</h4>
                  <p className="text-muted">
                    Quality cars and motor vehicles for personal and commercial use, delivered safely. 
                    Trusted vehicles from verified sellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="pictures/cowimg.jpg"
                  className="d-block w-100 rounded"
                  alt="Agricultural Products"
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-4">
                  <h4 className="text-success">Agricultural Products</h4>
                  <p className="text-muted">
                    Fresh farm produce and agricultural tools, directly sourced and delivered worldwide. 
                    Support local farmers with every purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Closing */}
      <div className="text-center mt-5">
        <h3 className="text-secondary">Shop With Confidence</h3>
        <p>
          At <strong>Southrift Online Soko</strong>, we provide a trusted platform to shop a wide variety of products with reliable delivery worldwide.
        </p>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/254700000000" // Replace with your WhatsApp number or group link
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-success mt-3"
        >
          Chat with Us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default AboutUs2;
