// import React from 'react';
// import { Container, Col, Button } from 'react-bootstrap';

// const ServerError = () => {
//   return (
//     <Container className='position-absolute top-50 start-50 translate-middle'>
//       <Col className='text-center'>
//         <h1 className='display-1 fw-bold'>500</h1>
//         <p className='fs-3'>Internal Server Error</p>
//         <p className='lead'>
//           <span className='text-danger'>Opps!</span> Something went wrong on the
//           server.
//         </p>
//         <Button onClick={() => window.location.reload(false)} variant='primary'>
//           Reload Page
//         </Button>
//       </Col>
//     </Container>
//   );
// };

// export default ServerError;

import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';

const ServerError = () => {
  return (
    <Container
      className='position-absolute top-50 start-50 translate-middle'
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f8d7da',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
        maxWidth: '600px',
        width: '100%',
        transition: 'background-color 0.3s ease, transform 0.3s ease'
      }}
    >
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
          500
        </h1>
        <p
          className='fs-3'
          style={{
            marginBottom: '15px',
            color: '#721c24'
          }}
        >
          Internal Server Error
        </p>
        <p
          className='lead'
          style={{
            color: '#721c24',
            marginBottom: '25px'
          }}
        >
          <span className='text-danger'>Oops!</span> Something went wrong on the server.
        </p>
        <Button
          onClick={() => window.location.reload(false)}
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
          Reload Page
        </Button>
      </Col>
    </Container>
  );
};

export default ServerError;
