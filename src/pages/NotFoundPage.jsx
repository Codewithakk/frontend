// import React from 'react';
// import { Container, Col, Button } from 'react-bootstrap';
// import Meta from '../components/Meta';

// const NotFoundPage = () => {
//   return (
//     <Container className='position-absolute top-50 start-50 translate-middle'>
//       <Meta title={'404 Not Found'} />
//       <Col className='text-center'>
//         <h1 className='display-1 fw-bold'>404</h1>
//         <p className='fs-3'>
//           <span className='text-danger'>Opps!</span> Page not found.
//         </p>
//         <p className='lead'>The page you’re looking for doesn’t exist.</p>
//         <Button href='/' variant='primary'>
//           Go Home
//         </Button>
//       </Col>
//     </Container>
//   );
// };

// export default NotFoundPage;

import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import Meta from '../components/Meta';

const NotFoundPage = () => {
  return (
    <Container
      className='position-absolute top-50 start-50 translate-middle'
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
        maxWidth: '600px',
        width: '100%',
        transition: 'background-color 0.3s ease, transform 0.3s ease'
      }}
    >
      <Meta title={'404 Not Found'} />
      <Col>
        <h1
          className='display-1 fw-bold'
          style={{
            color: '#dc3545',
            marginBottom: '20px',
            transform: 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          404
        </h1>
        <p
          className='fs-3'
          style={{
            marginBottom: '15px',
            color: '#721c24'
          }}
        >
          <span className='text-danger'>Oops!</span> Page not found.
        </p>
        <p
          className='lead'
          style={{
            color: '#721c24',
            marginBottom: '25px'
          }}
        >
          The page you’re looking for doesn’t exist.
        </p>
        <Button
          href='/'
          variant='primary'
          style={{
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            borderRadius: '5px',
            padding: '10px 20px'
          }}
          onMouseEnter={e => {
            e.target.style.backgroundColor = '#0056b3';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.target.style.backgroundColor = '#007bff';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Go Home
        </Button>
      </Col>
    </Container>
  );
};

export default NotFoundPage;
