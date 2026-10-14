import React, { useState } from 'react';
import axios from 'axios';

const Addkitchen = () => {
  const [product_name, setProductName] = useState('');
  const [product_description, setProductDescription] = useState('');
  const [product_cost, setProductCost] = useState('');
  const [product_photo, setProductPhoto] = useState([]);


  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading('Uploading...');
    setSuccess('');
    setError('');

    try {
      const formdata = new FormData()
      formdata.append('product_name', product_name)
      formdata.append('product_description', product_description)
      formdata.append('product_cost', product_cost)
      formdata.append('product_photo', product_photo)
      

      const response = await axios.post(
        'https://bombadir.pythonanywhere.com/api/addkitchen',
        formdata
      );
      setLoading('');
      setSuccess(response.data.message);
    } catch (err) {
      setLoading('');
      setError(err.message);
    }
  };

  return (
    <div style={{backgroundImage:'url("pictures/bgrt.jpg")',backgroundRepeat:'no-repeat', backgroundSize:'1800px'}}>  
    <div className="row justify-content-center mt-4" >
      <div className="col-md-6 card shadow p-4" style={{backgroundImage:'url("pictures/bgrt.jpg ")',backgroundRepeat:'no-repeat', backgroundSize:'1300px'}}>
        <form onSubmit={submit}>
          <h3>Add kitchen</h3>
          <h5 className="text-warning">{loading}</h5>
          <h5 className="text-success">{success}</h5>
          <h5 className="text-danger">{error}</h5>

          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <br />

          <label>Product Specifications</label>
          <textarea
            className="form-control"
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>
          <br />

          <label>Product Price</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setProductCost(e.target.value)}
            required
          />
          <br />

          <label>Product Image </label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            multiple
            onChange={(e) => setProductPhoto(e.target.files[0])}
            
          />
          <br />

          <button type="submit" className="btn btn-success w-100">
            Add Product
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Addkitchen;
