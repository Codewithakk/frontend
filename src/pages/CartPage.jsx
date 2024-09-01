import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import {
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Image,
  Button,
  ListGroupItem
} from 'react-bootstrap';
import { FaIndianRupeeSign } from 'react-icons/fa6';

import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import Meta from '../components/Meta';
import { addCurrency } from '../utils/addCurrency';

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async id => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <>
      <Meta title={'Shopping Cart'} />
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 && (
            <Message>
              Your cart is empty 👉 <Link to='/'>Go Back</Link>
            </Message>
          )}
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item
                key={item._id}
                style={{
                  marginBottom: '1rem',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  padding: '10px',
                  backgroundColor: '#fff'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#f1f1f1';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link
                      to={`/product/${item._id}`}
                      className='product-title'
                      style={{
                        textDecoration: 'none',
                        color: '#333',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#007bff'}
                      onMouseLeave={e => e.currentTarget.style.color = '#333'}
                    >
                      {item.name}
                    </Link>
                  </Col>
                  <Col md={2}>{addCurrency(item.price)}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={e => addToCartHandler(item, Number(e.target.value))}
                      style={{
                        transition: 'border-color 0.3s ease',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        padding: '5px'
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#007bff'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#ddd'}
                    >
                      {Array.from({ length: item.countInStock }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item._id)}
                      style={{
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                        borderRadius: '5px',
                        border: '1px solid #ddd'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#e0e0e0';
                        e.currentTarget.style.color = 'red';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.color = '#333';
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          {cartItems.length > 0 && (
            <Card style={{ border: '1px solid #ddd', borderRadius: '5px' }}>
              <ListGroup variant='flush'>
                <ListGroup.Item
                  style={{
                    borderBottom: 'none',
                    padding: '15px',
                    fontSize: '1.25rem',
                    textAlign: 'center'
                  }}
                >
                  <h2>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h2>
                  {addCurrency(
                    cartItems.reduce(
                      (acc, item) => acc + item.qty * item.price,
                      0
                    )
                  )}
                </ListGroup.Item>
                <ListGroupItem
                  style={{
                    borderTop: 'none',
                    padding: '15px',
                    textAlign: 'center'
                  }}
                >
                  <Button
                    className='w-100'
                    variant='warning'
                    type='button'
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                    style={{
                      transition: 'background-color 0.3s ease, color 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#e0a800';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = '#f7c431';
                      e.currentTarget.style.color = '#333';
                    }}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
};

export default CartPage;
