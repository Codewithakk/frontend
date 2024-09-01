// import React from 'react';
// import Message from './Message';
// import { Link } from 'react-router-dom';
// import { Button, Form, ListGroup } from 'react-bootstrap';
// import Rating from './Rating';

// const Reviews = ({
//   product,
//   userInfo,
//   submitHandler,
//   rating,
//   setRating,
//   comment,
//   setComment,
//   loading
// }) => {
//   return (
//     <>
//       <h2>Reviews</h2>
//       {product.reviews.length === 0 && <Message>No Reviews</Message>}
//       <ListGroup variant='flush'>
//         {product.reviews.map(review => (
//           <ListGroup.Item key={review._id}>
//             <strong>{review.name}</strong>
//             <Rating value={review.rating} />
//             <p>{new Date(review.createdAt).toDateString()}</p>
//             <p>{review.comment}</p>
//           </ListGroup.Item>
//         ))}
//         <ListGroup.Item>
//           <h2>Write a Customer Review</h2>

//           {userInfo ? (
//             <Form onSubmit={submitHandler}>
//               <Form.Group className='my-2' controlId='rating'>
//                 <Form.Label>Rating</Form.Label>
//                 <Form.Control
//                   as='select'
//                   required
//                   value={rating}
//                   onChange={e => setRating(e.target.value)}
//                 >
//                   <option value=''>Select...</option>
//                   <option value='1'>1 - Poor</option>
//                   <option value='2'>2 - Fair</option>
//                   <option value='3'>3 - Good</option>
//                   <option value='4'>4 - Very Good</option>
//                   <option value='5'>5 - Excellent</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group className='my-2' controlId='comment'>
//                 <Form.Label>Comment</Form.Label>
//                 <Form.Control
//                   as='textarea'
//                   row='3'
//                   required
//                   value={comment}
//                   onChange={e => setComment(e.target.value)}
//                 ></Form.Control>
//               </Form.Group>
//               <Button
//                 className='w-100'
//                 disabled={loading}
//                 type='submit'
//                 variant='warning'
//               >
//                 Submit
//               </Button>
//             </Form>
//           ) : (
//             <Message>
//               Please <Link to='/login'>sign in</Link> to write a review
//             </Message>
//           )}
//         </ListGroup.Item>
//       </ListGroup>
//     </>
//   );
// };

// export default Reviews;
import React from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';
import { Button, Form, ListGroup } from 'react-bootstrap';
import Rating from './Rating';

const Reviews = ({
  product,
  userInfo,
  submitHandler,
  rating,
  setRating,
  comment,
  setComment,
  loading
}) => {
  return (
    <>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Reviews</h2>
      {product.reviews.length === 0 && <Message>No Reviews</Message>}
      <ListGroup variant='flush'>
        {product.reviews.map(review => (
          <ListGroup.Item key={review._id} style={{ borderRadius: '10px', marginBottom: '10px', transition: 'background-color 0.3s ease' }}>
            <strong>{review.name}</strong>
            <Rating value={review.rating} />
            <p style={{ fontStyle: 'italic', color: '#555' }}>{new Date(review.createdAt).toDateString()}</p>
            <p>{review.comment}</p>
          </ListGroup.Item>
        ))}
        <ListGroup.Item style={{ borderRadius: '10px', padding: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Write a Customer Review</h2>

          {userInfo ? (
            <Form onSubmit={submitHandler} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Form.Group className='my-2' controlId='rating'>
                <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Rating</Form.Label>
                <Form.Control
                  as='select'
                  required
                  value={rating}
                  onChange={e => setRating(e.target.value)}
                  style={{
                    borderRadius: '5px',
                    borderColor: '#ced4da',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={e => e.target.style.borderColor = '#007bff'}
                  onBlur={e => e.target.style.borderColor = '#ced4da'}
                >
                  <option value=''>Select...</option>
                  <option value='1'>1 - Poor</option>
                  <option value='2'>2 - Fair</option>
                  <option value='3'>3 - Good</option>
                  <option value='4'>4 - Very Good</option>
                  <option value='5'>5 - Excellent</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className='my-2' controlId='comment'>
                <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Comment</Form.Label>
                <Form.Control
                  as='textarea'
                  rows='3'
                  required
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  style={{
                    borderRadius: '5px',
                    borderColor: '#ced4da',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={e => e.target.style.borderColor = '#007bff'}
                  onBlur={e => e.target.style.borderColor = '#ced4da'}
                ></Form.Control>
              </Form.Group>
              <Button
                className='w-100'
                disabled={loading}
                type='submit'
                variant='warning'
                style={{
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                  borderRadius: '5px',
                  padding: '0.5rem 1rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
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
                Submit
              </Button>
            </Form>
          ) : (
            <Message>
              Please <Link to='/login' style={{ color: '#007bff', textDecoration: 'underline' }}>sign in</Link> to write a review
            </Message>
          )}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Reviews;
