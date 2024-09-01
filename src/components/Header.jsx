import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';
import SearchBox from './SearchBox';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());

      navigate('/login');
      toast.success('Logout successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='md'
      collapseOnSelect
      className='fixed-top z-2'
      style={{
        transition: 'background-color 0.5s ease',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#FFD700',
              transition: 'color 0.3s ease',
            }}
          >
            Akshay Ecommerce Shop
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto m-2'>
            <SearchBox />
            <LinkContainer to='/cart'>
              <Nav.Link
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.3s ease',
                }}
              >
                <FaShoppingCart style={{ marginRight: '5px', fontSize: '1.2rem' }} />
                Cart
                {cartItems.length > 0 && (
                  <Badge
                    pill
                    bg='warning'
                    style={{
                      marginLeft: '5px',
                      color: '#000',
                      fontWeight: 'bold',
                      transition: 'transform 0.3s ease',
                    }}
                    className='text-dark'
                  >
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown
                title={`Hello👋, ${userInfo.name}`}
                id='username'
                style={{
                  fontWeight: 'bold',
                  color: '#FFD700',
                  transition: 'color 0.3s ease',
                }}
              >
                <LinkContainer to='/profile'>
                  <NavDropdown.Item
                    style={{
                      color: '#000',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item
                  onClick={logoutHandler}
                  style={{
                    color: '#000',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link
                  style={{
                    fontWeight: 'bold',
                    color: '#FFD700',
                    transition: 'color 0.3s ease',
                  }}
                >
                  <FaUser style={{ marginRight: '5px', fontSize: '1.2rem' }} />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
