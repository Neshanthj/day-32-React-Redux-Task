import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from "../components/productsCard";
import UncontrolledExample from '../components/CarouseSlide';
import { useDispatch, useSelector } from "react-redux";
import { saveProducts, saveCartProducts } from "../Redux/Reducers/ProductsSlice";

export default function Home() {
    // Accessing the Redux dispatcher
    const dispatcher = useDispatch();
    // Using useSelector to extract state data
    const { productsData = {} } = useSelector((state) => state);
    const { products = [], cartProducts = [] } = productsData;

    // Fetching products data from an API endpoint using useEffect
    useEffect(() => {
        fetch("./mocks/products.json")
            .then(response => response.json())
            .then(result => {
                if (result.products) {
                    // Dispatching an action to save fetched products into the Redux store
                    dispatcher(saveProducts(result.products));
                }
            })
            .catch(err => console.log("error ::", err))
    }, [dispatcher]);

    // Function to handle adding products to the cart
    const handleCart = (event, data) => {
        // Logic for adding products to the cart based on existing items
        if (cartProducts.length === 0) {
            let cartCopy = [...cartProducts];
            cartCopy.push({ ...data, quantity: 1 });
            dispatcher(saveCartProducts(cartCopy));
        } else if (cartProducts.length > 0) {
            let matchedData = cartProducts.find(item => item.id === data.id);
            if (matchedData) {
                alert("This Product Already Added");
            } else {
                let cartCopy = [...cartProducts];
                cartCopy.push({ ...data, quantity: 1 });
                dispatcher(saveCartProducts(cartCopy));
            }
        }
    }

    return (
        <div>
            {/* Component to display carousel slides */}
            <div className='carouselSlide mb-5'>
                <UncontrolledExample />
            </div>
            {/* Container to display product cards */}
            <Container className="text-center">
                <Row>
                    {/* Mapping through products data and rendering ProductCard component */}
                    {products.map(item => <ProductCard key={item.id} data={item} handleCart={handleCart} />)}
                </Row>
            </Container>
        </div>
    )
}
