import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiCart } from 'react-icons/bi'; 

// Functional component for the navigation bar
function NavBar() {
    // Accessing the Redux store state using useSelector hook
    const { productsData = {} } = useSelector((state) => state);
    const { cartProducts = [] } = productsData;

    // Rendering the navigation bar
    return (
        <div className='mt-4 mb-4'>
            {/* Navbar from React Bootstrap */}
            <Navbar expand="lg" variant="light" className="bg-light">
                <Container>
                    {/* Link to home page */}
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>Amazon</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <div className="d-flex align-items-center">
                                {/* Link to the home page */}
                                <Link to='/' className="nav-link me-3" style={{ textDecoration: 'none' }}>Home</Link>
                                {/* Link to the cart page */}
                                <Link to='/cart' style={{ textDecoration: 'none' }}>
                                    {/* Button for the cart with cart icon */}
                                    <button className='btn btn-outline-secondary position-relative'>
                                        <BiCart size={24} className="me-2" />
                                        Cart
                                        {/* Displaying badge with cart item count if cart has items */}
                                        {cartProducts.length > 0 &&
                                            <span className='badge bg-danger position-absolute top-0 start-100 translate-middle badge-circle'>
                                                {cartProducts.length}
                                            </span>
                                        }
                                    </button>
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

// Exporting the NavBar component as default
export default NavBar;
