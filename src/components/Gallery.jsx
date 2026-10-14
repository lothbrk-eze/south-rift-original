import React from 'react';
import { useEffect } from "react";
const Gallery = () => {

 useEffect(() => {
    document.title = "south rift online soko Gallery";
  }, []);




  return (
    <div className='bg-dark'>
    <div className="container py-5 ">
      <h1 className="text-center mb-4 text-uppercase text-light">Some  of the products that we sell</h1>

      {/* Static Grid Gallery */}
 <div className="row g-4">
  {/* Airbus ACJ320 */}
  <div className="col-sm-6 col-md-4">
    <div className="card shadow-sm">
      <img src="pictures\chaff cutter.jfif" alt="Airbus ACJ320" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">chaff cutter</h5>
      <p className="card-text">brand new </p>
      </div>
    </div>
  </div>

  {/* Bombardier Challenger 650 */}
  <div className="col-sm-6 col-md-4">
    <div className="card shadow-sm">
      <img src="pictures\mugs.jfif" alt="Bombardier Challenger 650" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">mugs</h5>
        <p className="card-text">high quality ceramic</p>
      </div>
    </div>
  </div>

  {/* Gulfstream G650 */}
  <div className="col-sm-6 col-md-4">
    <div className="card shadow-sm">
      <img src="pictures\range.jfif" alt="Gulfstream G650" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">rangerover</h5>
        <p className="card-text">silkblack 3000c</p>
      </div>
    </div>
  </div>

  {/* Boeing BBJ 767 */}
  <div className="col-sm-6 col-md-4">
    <div className="card shadow-sm">
      <img src="pictures\goldenglass.jfif" alt="Boeing BBJ 767" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Golden glass</h5>
        <p className="card-text">High quality </p>
      </div>
    </div>
  </div>

  {/* Bombardier Global 7500 */}
  <div className="col-sm-6 col-md-4">
    <div className="card shadow-sm">
      <img src="pictures\hotpot set.jfif" alt="Bombardier Global 7500" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Hotpot sets</h5>
        <p className="card-text">high good quality</p>
      </div>
    </div>
  </div>

  {/* Bombardier Global Express */}
  <div className="col-sm-6 col-md-4">
    <div className="card shadow-sm">
      <img src="pictures\pressure cooker.jfif" alt="Bombardier Global Express" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">presssure cooker</h5>
        <p className="card-text">silver high quality</p>
      </div>
    </div>
  </div>

  {/* Bombardier Global Fleet */}
  <div className="col-sm-6 col-md-4">
    <div className="card shadow-sm">
      <img src="pictures\leather shoes.jfif" alt="Bombardier Global Fleet" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Leather shoes</h5>
        <p className="card-text">durable and good quality</p>
      </div>
    </div>
  </div>
</div>

      {/* Carousel Section */}
      <h2 className="mt-5 text-center">private  Jets exclusive interiors</h2>

<div id="jetCarousel" className="carousel slide mt-3" data-bs-ride="carousel">
  {/* Slide Indicators */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#jetCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#jetCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#jetCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#jetCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#jetCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#jetCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>

  {/* Carousel Inner
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="pictures/jet1.jfif" className="d-block w-100" alt="Jet Interior 1" />
    </div>
    <div className="carousel-item">
      <img src="pictures/jet2.jfif" className="d-block w-100" alt="Jet Interior 2" />
    </div>
    <div className="carousel-item">
      <img src="pictures/jet3.jfif" className="d-block w-100" alt="Jet Interior 3" />
    </div>
    <div className="carousel-item">
      <img src="pictures/jet4.jfif" className="d-block w-100" alt="Jet Interior 4" />
    </div>
    <div className="carousel-item">
      <img src="pictures/jet5.jfif" className="d-block w-100" alt="Jet Interior 5" />
    </div>
    <div className="carousel-item">
      <img src="pictures/jet6.jfif" className="d-block w-100" alt="Jet Interior 6" />
    </div>
  </div>

  {/* Carousel Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#jetCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#jetCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div> 
  );
};

export default Gallery;
