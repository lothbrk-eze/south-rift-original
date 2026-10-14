import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5" > 
      <h1 className="text-center text-primary mb-4">About Us</h1>

      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img
            src="pictures\aeronexus-boeing767-external-profile2.jpg"
            alt="Private Jet"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-dark">Who We Are</h3>
          <p className="text-muted">
            At <strong>AviWorld Jets</strong>, we specialize in the acquisition, sales, and leasing of the world’s most luxurious private aircraft.
            Our expert team connects you with the finest jets from top manufacturers including Gulfstream, Bombardier, Dassault, and Embraer.
          </p>
        </div>
      </div>

      <div className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src="pictures/luxurycabin.avif"
            alt="Luxury Cabin"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3 className="text-dark">Our Mission</h3>
          <p className="text-muted">
            To deliver elite aviation solutions tailored to the needs of global leaders, entrepreneurs, and governments. We pride ourselves on
            confidentiality, precision, and exceptional service.
          </p>
        </div>
      </div>

      <h3 className="text-center text-success mb-4">Why Choose Us?</h3>
      <div className="row text-center mb-5">
        <div className="col-md-3">
          <div className="card shadow h-100">
            <img
              src="pictures/ptj.avif"
              className="card-img-top"
              alt="Global Fleet"
            />
            <div className="card-body">
              <h5 className="card-title">Global Fleet</h5>
              <p className="card-text">Access to new and pre-owned private jets across continents.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow h-100">
            <img
              src="pictures/pro.jpg"
              className="card-img-top"
              alt="Professional Services"
            />
            <div className="card-body">
              <h5 className="card-title">Expert Services</h5>
              <p className="card-text">Professional inspections, acquisition & documentation handled for you.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow h-100">
            <img
              src="pictures/finance.jpg"
              className="card-img-top"
              alt="Financing Options"
            />
            <div className="card-body">
              <h5 className="card-title">Flexible Financing</h5>
              <p className="card-text">Customized financing and leasing plans to meet your needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow h-100">
            <img
              src="pictures/global.jpg"
              className="card-img-top"
              alt="Trusted Worldwide"
            />
            <div className="card-body">
              <h5 className="card-title">Trusted Globally</h5>
              <p className="card-text">Preferred aviation partner for executives and elite travelers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3 className="text-secondary">Fly Beyond Expectations</h3>
        <p>
          Whether you're acquiring your first jet or expanding your fleet, <strong>AviWorld Jets</strong> is your dedicated partner in
          premium aviation.
        </p>
        <a href="/Contactus" className="btn btn-outline-primary mt-3">Contact Us Today</a>
      </div>
    </div>
  );
};

export default AboutUs;
