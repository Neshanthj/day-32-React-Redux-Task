import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { saveCartProducts } from "../Redux/Reducers/ProductsSlice";

// Functional component representing a cart item card
export default function CartCard({data,handleQuantity}) {
    // Accessing Redux dispatch function
    const dispatcher = useDispatch();
    // Accessing Redux store state
    const { productsData = {} } = useSelector((state) => state);
    const { cartProducts=[] } = productsData;

    // Function to handle removing an item from the cart
    const handleRemove = (data) => {
        // Dispatching an action to update the cart products by removing the selected item
        dispatcher(saveCartProducts(cartProducts.filter(item => item.id !== data.id)));
    }

    // Rendering the cart item card
    return (
        <Row className='mb-5'>
            <Col xs={12} md={3}>
                {/* Displaying the image of the item */}
                <Image style={{ width: "100%", height: "auto", objectFit: "cover" }} src={data.images[0]} rounded />
            </Col>
            <Col xs={12} md={9}>
                <Row>
                    <Col xs={8}>
                        {/* Displaying item title and description */}
                        <div style={{ fontWeight: "bolder" }}><h4>{data.title}</h4></div>
                        <div><p>{data.description}</p></div>
                    </Col>
                    <Col xs={2}>
                        {/* Form to select item quantity */}
                        <Form.Select onChange={(e) => handleQuantity(e, data)} className="p-0 text-center pe-2" aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-end" style={{ fontWeight: "bolder" }}>${data.addPrice}</Col>
                </Row>
                {/* Button to remove the item from the cart */}
                <Row>
                    <Col xs={9}></Col>
                    <Col xs={3} className="text-danger d-flex justify-content-end">
                        <Button onClick={() => handleRemove(data)} variant="danger" className="w-100">REMOVE</Button>
                    </Col>
                </Row>
                {/* Displaying sub-total, shipping, and total price */}
                <Row className="mt-4">
                    <Col xs={9}>Sub Total :</Col>
                    <Col xs={3} className="d-flex justify-content-end" style={{ fontWeight: "bolder" }}>${data.addPrice}</Col>
                </Row>
                {/* Displaying shipping details */}
                <Row className="mt-2">
                    <Col xs={9}>Shipping :</Col>
                    <Col xs={3} className="d-flex justify-content-end" style={{ fontWeight: "bolder" }}>FREE</Col>
                </Row>
                {/* Displaying the total price */}
                <Row className="mt-5">
                    <Col xs={9} className="font-weight-bold" style={{ fontWeight: "bolder" }}>Total :</Col>
                    <Col xs={3} className="d-flex justify-content-end" style={{ fontWeight: "bolder" }}>${data.addPrice}</Col>
                </Row>
                <Row><Col className="d-flex justify-content-end text-danger" style={{ fontSize: "12px" }}>Get Cash Only With RuPay Card</Col></Row>
            </Col>
        </Row>
    )
}
