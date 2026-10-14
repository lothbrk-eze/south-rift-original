import React, { useState } from "react";
import { useLocation } from 'react-router-dom'

const AircraftContactModal = ({ show, onClose }) => {
 const {product} = useLocation().state  || {}
  if (!show) return null;


  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        <h3 style={styles.modalTitle}>Call Seller on 2000 {product.product_name}</h3>
        <p style={styles.text}><strong>S/N:</strong> 3447</p>
        <p style={styles.seller}><strong>{product.seller_info}</strong></p>
        <p style={styles.text}>Please mention you saw this aircraft on Aviworld.com</p>
        <p style={styles.contact}>📞 {product.seller_contact}</p>
        <p style={styles.contact}></p>
        
      </div>
    </div>
  );
};

const AircraftPage = () => {
  const [showModal, setShowModal] = useState(false);
    const imagepath="https://bombadir.pythonanywhere.com/static/images/"
    const {product} = useLocation().state  || {}
  return (
    <div  className="row justify-content-center" style={styles.page}>
      <div className="col-md-6 card shadow mt-4">
      <h1 style={styles.title}>{product.product_name}</h1>
       <img src={imagepath + product.product_photo } alt="" /> <br />
       <b className='text-start'> ksh{product.product_cost}</b> <br />
       <b> {product.product_description}</b>
       
       
      <button className="btn-success" style={styles.mainBtn} onClick={() => setShowModal(true)}>
        Contact seller
      </button>
    </div>
      <AircraftContactModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    padding: "50px",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    height: "100vh"
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
    textShadow: "1px 1px 3px rgba(0,0,0,0.2)"
  },
  mainBtn: {
    padding: "12px 25px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
  },
  modalTitle: {
    marginBottom: "15px",
    color: "#222",
    fontSize: "1.2rem",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px"
  },
  text: {
    color: "#555",
    margin: "8px 0"
  },
  seller: {
    color: "#000",
    fontSize: "1.1rem",
    margin: "8px 0"
  },
  contact: {
    fontSize: "1rem",
    color: "#007bff",
    margin: "5px 0"
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    animation: "fadeIn 0.3s ease"
  },
  modal: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    position: "relative",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    animation: "slideUp 0.4s ease"
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#555",
    cursor: "pointer",
    transition: "color 0.2s ease",
  }
};

// Adding hover effects
styles.mainBtn[':hover'] = { backgroundColor: '#0056b3' };
styles.closeBtn[':hover'] = { color: '#000' };

export default AircraftPage;