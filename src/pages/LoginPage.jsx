import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Meta from '../components/Meta';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password, remember }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
      toast.success('Login successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("https://img.lovepik.com/element/40090/6396.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const formWrapperStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    width: '100%',
  };

  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const formControlStyle = {
    transition: 'all 0.3s ease',
    border: '2px solid #ddd',
    boxShadow: 'none',
  };

  const formControlFocusStyle = {
    border: '2px solid #ffc107',
  };

  const passwordToggleStyle = {
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    color: '#333',
  };

  const passwordToggleHoverStyle = {
    color: '#ffc107',
  };

  const submitButtonStyle = {
    transition: 'all 0.3s ease',
    backgroundColor: '#ffc107',
    borderColor: '#ffc107',
    color: '#fff',
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

  return (
    <div style={backgroundImageStyle}>
      <Meta title={'Sign In'} />
      <div style={formWrapperStyle}>
        <h1 style={headingStyle}>Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              value={email}
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
          <Row className='align-items-center'>
            <Col>
              <Form.Group className='mb-3' controlId='checkbox'>
                <Form.Check
                  type='checkbox'
                  label='Remember me'
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
              </Form.Group>
            </Col>
            <Col className='text-end'>
              <Link to={'/reset-password'} className='mx-2'>
                Forgot password?
              </Link>
            </Col>
          </Row>
          <Button
            className='mb-3 w-100'
            variant='warning'
            type='submit'
            disabled={isLoading}
            style={submitButtonStyle}
            onMouseOver={(e) => (e.target.style = { ...submitButtonStyle, ...submitButtonHoverStyle })}
            onMouseOut={(e) => (e.target.style = submitButtonStyle)}
          >
            Sign In
          </Button>
        </Form>
        <Row>
          <Col>
            New Customer?
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
              className='mx-2'
              style={registerLinkStyle}
              onMouseOver={(e) => (e.target.style = { ...registerLinkStyle, ...registerLinkHoverStyle })}
              onMouseOut={(e) => (e.target.style = registerLinkStyle)}
            >
              Register
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginPage;
