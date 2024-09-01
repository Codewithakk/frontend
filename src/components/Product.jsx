import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrency } from '../utils/addCurrency';
import { addToCart } from '../slices/cartSlice';
import Rating from './Rating';

const Product = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  return (
    <Card
      className='my-3 p-3 rounded text-center'
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: 'none' }}
        className='text-dark'
      >
        <Card.Img
          variant='top'
          src={product.image}
          style={{
            height: '200px',
            objectFit: 'contain',
            transition: 'transform 0.3s ease',
          }}
        />
        <Card.Body>
          <Card.Title
            as='div'
            className='product-title'
            style={{
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#007bff'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}
          >
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text
            as='div'
            className='mb-3'
            style={{ marginBottom: '1rem' }}
          >
            <Rating
              value={product.rating}
              text={`(${product.numReviews} reviews)`}
            />
          </Card.Text>
          <Card.Text
            as='h3'
            style={{
              marginTop: '0.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            {addCurrency(product.price)}
          </Card.Text>
        </Card.Body>
      </Link>
      <Button
        variant='warning'
        type='button'
        disabled={product.countInStock === 0}
        onClick={addToCartHandler}
        style={{
          transition: 'background-color 0.3s ease, color 0.3s ease',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          border: 'none',
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
        Add To Cart
      </Button>
    </Card>
  );
};

export default Product;
