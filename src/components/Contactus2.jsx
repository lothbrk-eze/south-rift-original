import React, { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope,  FaClock, FaShoppingCart, FaLeaf, FaCar, FaLaptop, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Footer from './Footer';

const Contactus2 = () => {

useEffect(() => {
    document.title = "south rift online soko Contact us";
  }, []);  

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
      'template_zn1lxn9',     // Replace with your actual Template ID
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
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      },
      (error) => {
        setMessage({ 
          type: 'error', 
          text: "Failed to send message. Please try again or call our support at +254 734 454 222" 
        });
        console.log(error.text);
        setLoading(false);
      }
    );
  };

  return (
    <div className='bg-light'>
      {/* Hero Section - Compact */}
      <div 
        style={{ 
          backgroundImage: 'url("pictures/ptj.avif")', 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '40px',
          paddingBottom: '40px'
        }}
        className="text-white"
      >
        <div className="container">
          <div className="text-center py-2">
            <h1 className="display-5 fw-bold text-success">
              <FaShoppingCart className="me-2" />
              Contact Us
            </h1>
            <p className="small col-md-8 mx-auto">
              Questions? We're here to help. Reach out anytime!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section - Compact */}
      <div className="container py-4">
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body p-3">
                <h4 className="card-title text-success mb-3">Send Message</h4>

                {message && (
                  <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'} d-flex align-items-center mb-3 py-2`} role="alert">
                    <div className="me-2">
                      {message.type === 'success' ? (
                        <FaCheckCircle size={16} />
                      ) : (
                        <FaExclamationCircle size={16} />
                      )}
                    </div>
                    <div className="small">{message.text}</div>
                  </div>
                )}
                
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-2">
                    <label className="form-label fw-bold small">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control form-control-sm" 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="mb-2">
                    <label className="form-label fw-bold small">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control form-control-sm" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold small">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea 
                      name="message" 
                      className="form-control form-control-sm" 
                      rows="3"
                      placeholder="Your message... product inquiry, support request, feedback, etc."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-success w-100 py-2 small fw-bold"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information - Compact */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 h-100">
              <div className="card-body p-3">
                <h4 className="card-title text-success mb-3">Contact Info</h4>

                <div className="contact-info">
                  <div className="d-flex align-items-start mb-3">
                   
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-success text-white rounded-circle p-2 me-3 flex-shrink-0" style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <FaPhone size={16} />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 small">Phone</h6>
                      <a href="tel:+254722174008" className="text-decoration-none text-dark fw-bold small d-block">
                        0722 174 008
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-success text-white rounded-circle p-2 me-3 flex-shrink-0" style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <FaEnvelope size={16} />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 small">Email</h6>
                      <a href="mailto:info@southriftsoko.ke" className="text-decoration-none text-dark fw-bold small d-block">
                        info@southriftsoko.ke
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="bg-success text-white rounded-circle p-2 me-3 flex-shrink-0" style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <FaClock size={16} />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 small">Hours</h6>
                      <p className="mb-0 text-muted small">
                        Mon-Sun: 6AM - 10PM<br/>
                        <span className="badge bg-success mt-1 small">24/7 Orders</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Product Categories - Compact */}
                <div className="mt-3 pt-3 border-top">
                  <h6 className="text-success mb-2 small fw-bold">Categories</h6>
                  <div className="row g-2">
                    <div className="col-4">
                      <div className="bg-light border rounded p-2 text-center small">
                        <FaLeaf className="text-success mb-1" size={20} />
                        <div className="fw-bold small">Agriculture</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="bg-light border rounded p-2 text-center small">
                        <FaLaptop className="text-info mb-1" size={20} />
                        <div className="fw-bold small">Electronics</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="bg-light border rounded p-2 text-center small">
                        <FaCar className="text-primary mb-1" size={20} />
                        <div className="fw-bold small">Vehicles</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contactus2;