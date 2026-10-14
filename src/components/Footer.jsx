import React from 'react';
import { FaShoppingCart, FaMapMarkerAlt, FaPhone, FaCar, FaLaptop, FaShieldAlt, FaTruck, FaHeadset,FaHome } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Description Section */}
          <div className="col-lg-4">
            <h4 className="text-success">
              <FaShoppingCart className="me-2" />
              SOUTH RIFT ONLINE SOKO
            </h4>
            <p className="text-light">
              Your premier online marketplace delivering a wide range of quality products 
              from agricultural produce, electronics, to motor vehicles. We ensure 
              customer service convenience, satisfaction, and complete transparency in 
              all transactions. Shop with confidence!
            </p>
          
            <div className="mt-4">
              <a href="https://www.youtube.com/" className="social-icon text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.instagram.com/" className="social-icon text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/" className="social-icon text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/" className="social-icon text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
         
          {/* Quick Links Section */}
          <div className="col-lg-4">
            <h4 className="text-warning">Quick Links</h4>
            <ul className="list-unstyled">
             
              <li className="mb-2">
                <a href="/Products" className="text-white text-decoration-none hover-text-success">
                  <FaHome className="me-2" /> Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/Products" className="text-white text-decoration-none hover-text-success">
                  <FaLaptop className="me-2" /> Productoffers
                </a>
              </li>
              <li className="mb-2">
                <a href="/Products" className="text-white text-decoration-none hover-text-success">
                  <FaCar className="me-2" /> Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="/Cart" className="text-white text-decoration-none hover-text-success">
                  <FaShoppingCart className="me-2" /> My Cart
                </a>
              </li>
              <li className="mb-2">
                <a href="/Contactus" className="text-white text-decoration-none hover-text-success">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/Aboutus" className="text-white text-decoration-none hover-text-success">
                  About Us
                </a>
              </li>
            </ul>
          </div>
         
          {/* Contact & Services Section */}
          <div className="col-lg-4">
            <h4 className="text-warning">Contact & Services</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-success" />
                <span className="text-light">South Rift Region, Kenya</span>
              </li>
              <li className="mb-2">
                <FaPhone className="me-2 text-success" />
                <a href="tel:+254722 174008" className="text-white text-decoration-none">
                  +254 722 174 008
                </a>
              </li>
             
              <li className="mb-2 mt-3">
                <FaHeadset className="me-2 text-success" />
                <span className="text-light">Customer Support: 24/7</span>
              </li>
              <li className="mb-2">
                <FaTruck className="me-2 text-success" />
                <span className="text-light">Nationwide Delivery</span>
              </li>
              <li className="mb-2">
                <FaShieldAlt className="me-2 text-success" />
                <span className="text-light">Secure Transactions</span>
              </li>
            </ul>
           
            <h5 className="mt-4 text-warning">Payment Methods</h5>
            <div className="d-flex flex-wrap gap-2">
              <div className="bg-light rounded p-2">
                <small className="text-dark fw-bold">M-PESA</small>
              </div>
            
              <div className="bg-light rounded p-2">
                <small className="text-dark fw-bold">Pay on Delivery</small>
              </div>
            </div>
          </div>
        </div>
       
        <hr className="mt-4 bg-light" />
       
        <div className="text-center pt-3">
          <p className="mb-2 text-light">
            <strong className="text-success"></strong> Customer Service Convenience • Complete Satisfaction • Full Transparency
          </p>
          <p className="mb-0">
            Developed for South Rift Online Soko &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .hover-text-success:hover {
          color: #28a745 !important;
          text-decoration: underline !important;
        }
        .social-icon:hover {
          color: #28a745 !important;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
        .badge {
          font-size: 0.85rem;
          padding: 0.5rem 0.75rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;