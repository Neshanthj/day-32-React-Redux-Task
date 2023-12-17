import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Component for displaying a product card
export default function ProductCard({ data, handleCart }) {
    const [addedToCart, setAddedToCart] = useState(false);

    // Function to handle adding the product to the cart
    const handleAddToCart = (event, productData) => {
        handleCart(event, productData);
        // Updating the state to indicate the product has been added to the cart
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 3000); 
    };

    // Rendering the product card
    return (
        <Col xs={12} sm={6} md={6} lg={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: '20rem' }} className='shadow'>
                {/* Displaying the product image */}
                <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={data.images[0]} />
                <Card.Body>
                    {/* Displaying the product title */}
                    <Card.Title>{data.title}</Card.Title>
                    {/* Displaying the product description */}
                    <Card.Text>{data.description}</Card.Text>
                    {/* Displaying the product price */}
                    <Card.Text>${data.price}</Card.Text>
                </Card.Body>
                <div className='card-footer border-top-0'>
                    {!addedToCart ? (
                        // Button to add the product to the cart
                        <Button onClick={(event) => handleAddToCart(event, data)} variant="primary">
                            Add to Cart
                        </Button>
                    ) : (
                        <p style={{ color: 'green' }}>Product Added to Cart!</p>
                    )}
                </div>
            </Card>
        </Col>
    )
}
