import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid style={{ backgroundColor: '#343a40', color: '#fff' }}>
      <Row>
        <Col className='text-center py-3' style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Akshay Ecommerce Shop &copy; {currentYear}
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='auto' className='text-center py-2'>
          <a
            href='https://github.com/Codewithakk'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: '#fff',
              margin: '0 10px',
              fontSize: '1.5rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
          >
            <FaGithub
              onMouseEnter={(e) => (e.target.style.color = '#4078c0')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            />
          </a>
          <a
            href='https://www.instagram.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: '#fff',
              margin: '0 10px',
              fontSize: '1.5rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
          >
            <FaInstagram
              onMouseEnter={(e) => (e.target.style.color = '#e4405f')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            />
          </a>
          <a
            href='https://www.facebook.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: '#fff',
              margin: '0 10px',
              fontSize: '1.5rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
          >
            <FaFacebook
              onMouseEnter={(e) => (e.target.style.color = '#3b5998')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
