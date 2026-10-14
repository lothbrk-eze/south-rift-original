import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaShoppingCart, FaLeaf, FaCar, FaLaptop, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Footer from './Footer';



const Contactus = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setMessage({ type: 'error', text: 'Please fill in all required fields.' });
      setLoading(false);
      return;
    }

    emailjs.sendForm(
      'service_f5ysmxh',      // Replace with your actual Service ID
      'template_shc2fh6',     // Replace with your actual Template ID
      form.current,
      'fm22xbY5U5AkcrACG'     // Replace with your actual Public Key
    ).then(
      (result) => {
        setMessage({ 
          type: 'success', 
          text: "Message sent successfully! Our team will contact you within 24 hours." 
        });
        console.log(result.text);
        form.current.reset();
        setFormData({ name: '', email: '', phone: '', message: '' });
        setLoading(false);
      },
      (error) => {
        setMessage({ 
          type: 'error', 
          text: "Failed to send message. Please try again or call our support at 0722 174 008" 
        });
        console.log(error.text);
        setLoading(false);
      }
    );
  };


  return (
    <div className='min-vh-100 bg-light'>
      {/* Hero Section */}
      <div 
        style={{ 
          backgroundImage: 'url("pictures/ptj.avif")', 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '80px',
          paddingBottom: '60px'
        }}
        className="text-white"
      >
        <div className="container">
          <div className="text-center py-5">
            <h1 className="display-4 fw-bold text-success">
              <FaShoppingCart className="me-3" />
              Contact South Rift Online Soko
            </h1>
            <p className="lead col-md-8 mx-auto">
              Your trusted online marketplace for agricultural produce, electronics, and motor vehicles. 
              We're here to serve you with transparency and excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4 p-md-5">
                <h2 className="card-title text-success mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted mb-4">
                  Have questions about our products or services? Fill out the form below and our team will respond promptly.
                </p>

                {message && (
                  <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'} d-flex align-items-center mb-4`} role="alert">
                    <div className="me-2">
                      {message.type === 'success' ? (
                        <FaCheckCircle size={20} />
                      ) : (
                        <FaExclamationCircle size={20} />
                      )}
                    </div>
                    <div>{message.text}</div>
                  </div>
                )}
                
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control p-3" 
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control p-3" 
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                    <small className="text-muted">We'll respond to this email address</small>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      className="form-control p-3" 
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <small className="text-muted">Optional - helps us contact you faster</small>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      Your Message <span className="text-danger">*</span>
                    </label>
                    <textarea 
                      name="message" 
                      className="form-control" 
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                    <small className="text-muted">Be as detailed as possible for faster response</small>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-success btn-lg w-100 py-3"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 h-100">
              <div className="card-body p-4 p-md-5">
                <h2 className="card-title text-success mb-4">
                  Contact Information
                </h2>
                <p className="text-muted mb-5">
                  Reach out to us through any of these channels. We're committed to providing excellent customer service.
                </p>

                <div className="contact-info">
                  <div className="d-flex align-items-start mb-5">
                    <div className="bg-success text-white rounded-circle p-3 me-3 flex-shrink-0">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-2">Our Location</h5>
                      <p className="mb-0 text-muted">
                        South Rift Region Headquarters<br />
                        Eldoret, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-5">
                    <div className="bg-success text-white rounded-circle p-3 me-3 flex-shrink-0">
                      <FaPhone size={24} />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-3">Phone Number</h5>
                      <a href="tel:+254722174008" className="text-decoration-none text-dark fw-bold d-block fs-5">
                        0722 174 008
                      </a>
                      <small className="text-muted">Available 24/7</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-5">
                    <div className="bg-success text-white rounded-circle p-3 me-3 flex-shrink-0">
                      <FaEnvelope size={24} />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-3">Email Address</h5>
                      <a href="mailto:info@southriftsoko.ke" className="text-decoration-none text-dark fw-bold d-block">
                        info@southriftsoko.ke
                      </a>
                      <small className="text-muted">We respond within 2-4 hours</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-0">
                    <div className="bg-success text-white rounded-circle p-3 me-3 flex-shrink-0">
                      <FaClock size={24} />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-2">Business Hours</h5>
                      <p className="mb-2 text-muted">
                        <strong>Monday - Sunday:</strong> 6:00 AM - 10:00 PM
                      </p>
                      <p className="mb-0">
                        <span className="badge bg-success">24/7 Online Orders Available</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Product Categories */}
                <div className="mt-5 pt-4 border-top">
                  <h4 className="text-success mb-4">Our Product Categories</h4>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="bg-light border rounded p-4 text-center h-100 transition-all" style={{cursor: 'pointer', transition: 'all 0.3s ease'}}>
                        <FaLeaf className="text-success mb-3" size={32} />
                        <h6 className="fw-bold">Agricultural Produce</h6>
                        <small className="text-muted">Fresh & Organic</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-light border rounded p-4 text-center h-100 transition-all" style={{cursor: 'pointer', transition: 'all 0.3s ease'}}>
                        <FaLaptop className="text-info mb-3" size={32} />
                        <h6 className="fw-bold">Electronics</h6>
                        <small className="text-muted">Latest Gadgets</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-light border rounded p-4 text-center h-100 transition-all" style={{cursor: 'pointer', transition: 'all 0.3s ease'}}>
                        <FaCar className="text-primary mb-3" size={32} />
                        <h6 className="fw-bold">Vehicles</h6>
                        <small className="text-muted">Quality & Reliable</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="alert alert-success mt-4 border-0" role="alert">
                  <div className="d-flex align-items-start">
                    <FaExclamationCircle className="text-success me-3 mt-1" size={20} />
                    <div>
                      <h5 className="alert-heading mb-2">⚡ Need Help Urgently?</h5>
                      <p className="mb-0">
                        Call us anytime at: 
                        <a href="tel:+254722174008" className="ms-2 fw-bold text-success text-decoration-none">
                          0722 174 008
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Notice */}
                <div className="mt-4 p-3 bg-light rounded border-start border-4 border-success">
                  <p className="mb-0 small text-muted">
                    <strong>📞 Response Time:</strong> We typically respond within 2-4 hours during business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <div className="mb-4">
                  <h3 className="text-success mb-2">Frequently Asked Questions</h3>
                  <p className="text-muted">Quick answers to common questions</p>
                </div>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item border-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                        How do I place an order?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body bg-light">
                        Browse our products online, add to cart, and checkout. We accept M-PESA, credit cards, and pay-on-delivery options. You can also contact us directly for bulk orders or custom requests.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                        What is your delivery policy?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body bg-light">
                        We deliver nationwide within 2-5 business days. Delivery fees vary based on location and product size. Free delivery available on orders over KES 5,000 within Eldoret.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                        Can I return a product?
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body bg-light">
                        Yes, we have a 7-day return policy for most items. Agricultural products have specific return conditions. Please contact our support team with your order details for assistance.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                        Do you offer wholesale pricing?
                      </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body bg-light">
                        Yes! We offer competitive wholesale rates for bulk purchases. Contact us at 0722 174 008 or info@southriftsoko.ke for a customized quote.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                        Is my payment information secure?
                      </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body bg-light">
                        Yes, we use encrypted payment gateways to ensure all transactions are secure. Your personal information is never shared with third parties.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support CTA Section */}
        <div className="row mt-5 mb-5">
          <div className="col-12">
            <div className="bg-success text-white rounded p-5 text-center">
              <h3 className="mb-3">Still have questions?</h3>
              <p className="mb-4 fs-5">Our customer service team is ready to help you 24/7. Reach out anytime!</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="tel:+254722174008" className="btn btn-light btn-lg">
                  📞 Call Us Now
                </a>
                <a href="mailto:info@southriftsoko.ke" className="btn btn-outline-light btn-lg">
                  📧 Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contactus;