import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
// retrieve user from local storage
const loggeduser = JSON.parse (localStorage.getItem("user"))
// handle logout function
let navigate=useNavigate()
 const [cartCount, setCartCount] = useState(0)
 const [cartItems, setCartItems] = useState([])

 useEffect(() => {
     const loadCart = () => {
         try {
             const stored = JSON.parse(localStorage.getItem('cart') || '[]')
             setCartItems(stored)
             setCartCount(stored.reduce((s,i) => s + (i.qty||0), 0))
         } catch(e) {
             setCartItems([])
             setCartCount(0)
         }
     }
     loadCart()
     // listen for custom cartUpdated event and storage event
     const handler = () => loadCart()
     window.addEventListener('storage', handler)
     window.addEventListener('cartUpdated', handler)
     return () => {
         window.removeEventListener('storage', handler)
         window.removeEventListener('cartUpdated', handler)
     }
 }, [])
const cartTotal = cartItems.reduce((s,i) => s + (i.qty||0) * (i.price||0), 0)
const handlelogout = () =>{
localStorage.removeItem("user")
// redirect the user to signin
navigate("/signin")
}

return (
 

<div class="bg-secondary">
 
{/* navbar */}
<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top " variant="tabs" defaultActiveKey="/">
<div className="navbar-brand d-flex align-items-center gap-2">
  <i className="bi bi-bag-check-fill text-warning fs-4"></i>
  <span className="fw-bold text-white fs-5">
    South Rift Online Soko
  </span>
</div>
<button class="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#navbarcollapse">

 

<span class="navbar-toggler-icon"></span>

</button>
 

<div class="collapse navbar-collapse"
id="navbarcollapse">
    <div className='navbar-nav ms-auto text-start'>
{/* links are */}
<Link to="/" className='nav-link  mx-2'>Home</Link>
<Link to="/Getproducts2" className='nav-link  mx-2'>Product offers</Link>
 <Link to='/Aboutus2' className='nav-link mx-2'>Aboutus</Link>
<Link to="/Gallery" className='nav-link  mx-2'>Gallery</Link>
<Link to="/Contactus2" className='nav-link  mx-2'>Contactus</Link>



    </div>


</div>


{/* right hand of navbar */}
<div className='ms-auto d-flex align-items-center gap-3'>
    <button className='btn btn-outline-primary d-flex align-items-center' data-bs-toggle="offcanvas" data-bs-target="#navbarCartOffcanvas" aria-controls="navbarCartOffcanvas">
        <FaShoppingCart className='me-2'/> Cart ({cartCount})
    </button>
{/* logged in as : {loggeduser.email} */}
{/* Chec if the user is logged in */}
{/* if yes show welcome message and logout button */}
{
loggeduser ? (<div className='navbar-nav d-flex align-items-center'>
{/* show welcome message and logout */}
<span className='text-warning'>
Logged in as : {loggeduser.email}
</span>
{/* Logout button */}
<button className='btn btn-outline-primary' onClick={handlelogout}>Logout</button>
</div>) : (<div className='navbar-nav'>
{/* show signin button and sign up button */}
<Link to="/signin"className='btn btn-outline-primary fa-user me-2'>Signin</Link>
<Link to="/signup" className='btn btn-light fa-user-plus '>Signup</Link>
</div>)
}
</div>
</nav>
{/* end of navbar */}

{/* Cart Offcanvas */}
<div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarCartOffcanvas" aria-labelledby="navbarCartOffcanvasLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="navbarCartOffcanvasLabel">Your Cart ({cartCount})</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
        {cartItems.length === 0 ? (
            <p className="text-muted">Your cart is empty</p>
        ) : (
            <div>
                {cartItems.map(item => (
                    <div key={item.id} className="d-flex align-items-center mb-3">
                        <div className="flex-grow-1">
                            <strong className="d-block">{item.name}</strong>
                            <small className="text-muted">ksh {item.price} × {item.qty} = ksh {item.price * item.qty}</small>
                        </div>
                    </div>
                ))}

                <hr />
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <strong>Total</strong>
                    <strong>ksh {cartTotal}</strong>
                </div>
                <div className="d-grid">
                    <button className="btn btn-success" onClick={() => navigate('/makepayment', { state: { cart: cartItems, total: cartTotal } })} data-bs-dismiss="offcanvas">Checkout</button>
                </div>
            </div>
        )}
    </div>
</div>
</div>
 

 

)
}

export default Navbar