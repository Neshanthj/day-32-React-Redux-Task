import Container from 'react-bootstrap/Container';
import CartCard from '../components/cartCard';
import { useDispatch, useSelector } from 'react-redux';
import { saveCartProducts } from '../Redux/Reducers/ProductsSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cart() {
    // Accessing the Redux dispatcher and state
    const dispatcher = useDispatch();
    const { productsData = {} } = useSelector((state) => state);
    const { cartProducts = [] } = productsData;

    // Function to handle quantity changes for cart items
    const handleQuantity = (e, data) => {
        let quantity = e.target.value;
        let price = data.price;
        dispatcher(
            saveCartProducts(
                cartProducts.map((item) => {
                    if (item.id === data.id) {
                        return { ...item, addPrice: quantity * price };
                    }
                    return { ...item };
                })
            )
        );
    };

    // Function to calculate the grand total of cart items
    const calculateGrandTotal = () => {
        let total = 0;
        cartProducts.forEach((product) => {
            total += product.addPrice || 0;
        });
        return total;
    };

    // Calculate the grand total
    const grandTotal = calculateGrandTotal();

    // Function to handle removal of items from the cart
    const handleRemove = (data) => {
        dispatcher(saveCartProducts(cartProducts.filter((item) => item.id !== data.id)));
    };

    return (
        <Container>
            {/* Displaying CartCard components for each cart item */}
            {cartProducts.length > 0 ? (
                cartProducts.map((item, i) => <CartCard key={i} data={item} handleQuantity={handleQuantity} handleRemove={handleRemove} />)
            ) : (
                // Display an image when the cart is empty
                <img className="emptyCart" src="https://th.bing.com/th/id/OIP.M7RYb5b8OLrdNVTgf8EczwHaHa?rs=1&pid=ImgDetMain" alt="img" />
            )}

            {/* Displaying the Grand Total section */}
            <Row className="mt-5">
                <Col xs={9} className="font-weight-bold" style={{ fontWeight: 'bolder' }}>
                    Grand Total :
                </Col>
                <Col xs={3} className="d-flex justify-content-end" style={{ fontWeight: 'bolder' }}>
                    ${grandTotal}
                </Col>
            </Row>
        </Container>
    );
}
