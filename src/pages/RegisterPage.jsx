import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Meta from '../components/Meta';

// Inline styles for layout and effects
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f2f5',
};

const formWrapperStyle = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '500px',
  width: '100%',
  transition: 'all 0.3s ease',
};

const formControlStyle = {
  borderRadius: '4px',
  border: '1px solid #ced4da',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
};

const formControlFocusStyle = {
  borderColor: '#ffc107',
  boxShadow: '0 0 0 0.2rem rgba(255, 193, 7, 0.25)',
};

const passwordToggleStyle = {
  cursor: 'pointer',
  color: '#333',
};

const passwordToggleHoverStyle = {
  color: '#ffc107',
};

const submitButtonStyle = {
  backgroundColor: '#ffc107',
  borderColor: '#ffc107',
  color: '#fff',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
};

const submitButtonHoverStyle = {
  backgroundColor: '#e0a800',
  borderColor: '#e0a800',
};

const registerLinkStyle = {
  color: '#ffc107',
  textDecoration: 'none',
};

const registerLinkHoverStyle = {
  color: '#e0a800',
  textDecoration: 'underline',
};

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success('Registration successful. Welcome!');
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <Meta title={'Register'} />
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Register</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              type='text'
              placeholder='Enter name'
              onChange={(e) => setName(e.target.value)}
              style={formControlStyle}
              onFocus={(e) => (e.target.style = { ...formControlStyle, ...formControlFocusStyle })}
              onBlur={(e) => (e.target.style = formControlStyle)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              type='email'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
              style={formControlStyle}
              onFocus={(e) => (e.target.style = { ...formControlStyle, ...formControlFocusStyle })}
              onBlur={(e) => (e.target.style = formControlStyle)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Enter password'
                onChange={(e) => setPassword(e.target.value)}
                style={formControlStyle}
                onFocus={(e) => (e.target.style = { ...formControlStyle, ...formControlFocusStyle })}
                onBlur={(e) => (e.target.style = formControlStyle)}
              />
              <InputGroup.Text
                onClick={togglePasswordVisibility}
                id='togglePasswordVisibility'
                style={passwordToggleStyle}
                onMouseOver={(e) => (e.target.style = { ...passwordToggleStyle, ...passwordToggleHoverStyle })}
                onMouseOut={(e) => (e.target.style = passwordToggleStyle)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group className='mb-3' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                placeholder='Confirm password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={formControlStyle}
                onFocus={(e) => (e.target.style = { ...formControlStyle, ...formControlFocusStyle })}
                onBlur={(e) => (e.target.style = formControlStyle)}
              />
              <InputGroup.Text
                onClick={toggleConfirmPasswordVisibility}
                id='toggleConfirmPasswordVisibility'
                style={passwordToggleStyle}
                onMouseOver={(e) => (e.target.style = { ...passwordToggleStyle, ...passwordToggleHoverStyle })}
                onMouseOut={(e) => (e.target.style = passwordToggleStyle)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Button
            className='mb-3 w-100'
            variant='warning'
            type='submit'
            disabled={isLoading}
            style={submitButtonStyle}
            onMouseOver={(e) => (e.target.style = { ...submitButtonStyle, ...submitButtonHoverStyle })}
            onMouseOut={(e) => (e.target.style = submitButtonStyle)}
          >
            Register
          </Button>
        </Form>
        <Row>
          <Col>
            Already have an account?
            <Link
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
              className='mx-2'
              style={registerLinkStyle}
              onMouseOver={(e) => (e.target.style = { ...registerLinkStyle, ...registerLinkHoverStyle })}
              onMouseOut={(e) => (e.target.style = registerLinkStyle)}
            >
              Sign In
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegisterPage;
