import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNewPasswordRequestMutation } from '../slices/usersApiSlice';
import FormContainer from '../components/FormContainer';
import Meta from '../components/Meta';
import Message from '../components/Message';
import { toast } from 'react-toastify';

// CSS Styles for transition effects
const formContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f2f5',
};

const formStyle = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  maxWidth: '400px',
  width: '100%',
};

const inputStyle = {
  borderRadius: '4px',
  border: '1px solid #ced4da',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
};

const inputFocusStyle = {
  borderColor: '#ffc107',
  boxShadow: '0 0 0 0.2rem rgba(255, 193, 7, 0.25)',
};

const buttonStyle = {
  backgroundColor: '#ffc107',
  borderColor: '#ffc107',
  color: '#fff',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#e0a800',
  borderColor: '#e0a800',
};

const ResetPasswordRequestPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [requestNewPassword, { isLoading }] = useNewPasswordRequestMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await requestNewPassword({ email }).unwrap();
      setMessage(res.message);
      setEmail('');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div style={formContainerStyle}>
      <div style={formStyle}>
        <Meta title={'Request New Password'} />
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Request New Password</h1>
        {message && <Message>{message}</Message>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              value={email}
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocusStyle })}
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </Form.Group>
          <Button
            className='mb-3 w-100'
            variant='warning'
            type='submit'
            disabled={isLoading}
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style = { ...buttonStyle, ...buttonHoverStyle })}
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordRequestPage;
