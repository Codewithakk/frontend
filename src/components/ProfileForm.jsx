// import React, { useState } from 'react';
// import { Button, Form, InputGroup } from 'react-bootstrap';
// import { setCredentials } from '../slices/authSlice';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { useProfileMutation } from '../slices/usersApiSlice';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import Loader from './Loader';

// const ProfileForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setConfirmShowPassword] = useState(false);

//   const { userInfo } = useSelector(state => state.auth);

//   const [updateProfile, { isLoading: isUpdateProfileLoading }] =
//     useProfileMutation();

//   const dispatch = useDispatch();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmShowPassword(!showConfirmPassword);
//   };

//   const submitHandler = async e => {
//     e.preventDefault();

//     try {
//       if (password !== confirmPassword) {
//         return toast.error('Passwords do not match!');
//       }
//       const res = await updateProfile({ name, email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       setName('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//       toast.success(res.message);
//     } catch (error) {
//       toast.error(error?.data?.message || error.error);
//     }
//   };
//   return (
//     <Form onSubmit={submitHandler}>
//       <Form.Group className='mb-3' controlId='name'>
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           value={name}
//           type='text'
//           placeholder='Enter name'
//           onChange={e => setName(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group className='mb-3' controlId='email'>
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           value={email}
//           type='email'
//           placeholder='Enter email'
//           onChange={e => setEmail(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group className='mb-3' controlId='password'>
//         <Form.Label>Password</Form.Label>
//         <InputGroup>
//           <Form.Control
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             placeholder='Enter password'
//             onChange={e => setPassword(e.target.value)}
//           />
//           <InputGroup.Text
//             onClick={togglePasswordVisibility}
//             id='togglePasswordVisibility'
//             style={{ cursor: 'pointer' }}
//           >
//             {showPassword ? <FaEye /> : <FaEyeSlash />}
//           </InputGroup.Text>
//         </InputGroup>
//       </Form.Group>
//       <Form.Group className='mb-3' controlId='confirmPassword'>
//         <Form.Label>Confirm Password</Form.Label>
//         <InputGroup>
//           <Form.Control
//             type={showConfirmPassword ? 'text' : 'password'}
//             value={confirmPassword}
//             placeholder='Confirm password'
//             onChange={e => setConfirmPassword(e.target.value)}
//           />
//           <InputGroup.Text
//             onClick={toggleConfirmPasswordVisibility}
//             id='toggleConfirmPasswordVisibility'
//             style={{ cursor: 'pointer' }}
//           >
//             {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//           </InputGroup.Text>
//         </InputGroup>
//       </Form.Group>
//       <Button className='mb-3 w-100' variant='warning' type='submit'>
//         Update
//       </Button>
//       {isUpdateProfileLoading && <Loader />}
//     </Form>
//   );
// };

// export default ProfileForm;

import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useProfileMutation } from '../slices/usersApiSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Loader from './Loader';

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const { userInfo } = useSelector(state => state.auth);

  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useProfileMutation();

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const submitHandler = async e => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        return toast.error('Passwords do not match!');
      }
      const res = await updateProfile({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Form onSubmit={submitHandler} style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Name</Form.Label>
        <Form.Control
          value={name}
          type='text'
          placeholder='Enter name'
          onChange={e => setName(e.target.value)}
          style={{
            transition: 'border-color 0.3s ease',
            borderRadius: '5px',
            borderColor: '#ced4da',
            boxShadow: 'none'
          }}
          onFocus={e => e.target.style.borderColor = '#007bff'}
          onBlur={e => e.target.style.borderColor = '#ced4da'}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Email address</Form.Label>
        <Form.Control
          value={email}
          type='email'
          placeholder='Enter email'
          onChange={e => setEmail(e.target.value)}
          style={{
            transition: 'border-color 0.3s ease',
            borderRadius: '5px',
            borderColor: '#ced4da',
            boxShadow: 'none'
          }}
          onFocus={e => e.target.style.borderColor = '#007bff'}
          onBlur={e => e.target.style.borderColor = '#ced4da'}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='password'>
        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder='Enter password'
            onChange={e => setPassword(e.target.value)}
            style={{
              transition: 'border-color 0.3s ease',
              borderRadius: '5px',
              borderColor: '#ced4da',
              boxShadow: 'none'
            }}
            onFocus={e => e.target.style.borderColor = '#007bff'}
            onBlur={e => e.target.style.borderColor = '#ced4da'}
          />
          <InputGroup.Text
            onClick={togglePasswordVisibility}
            id='togglePasswordVisibility'
            style={{ cursor: 'pointer', transition: 'color 0.3s ease' }}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className='mb-3' controlId='confirmPassword'>
        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Confirm Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}
            style={{
              transition: 'border-color 0.3s ease',
              borderRadius: '5px',
              borderColor: '#ced4da',
              boxShadow: 'none'
            }}
            onFocus={e => e.target.style.borderColor = '#007bff'}
            onBlur={e => e.target.style.borderColor = '#ced4da'}
          />
          <InputGroup.Text
            onClick={toggleConfirmPasswordVisibility}
            id='toggleConfirmPasswordVisibility'
            style={{ cursor: 'pointer', transition: 'color 0.3s ease' }}
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Button
        className='mb-3 w-100'
        variant='warning'
        type='submit'
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
        Update
      </Button>
      {isUpdateProfileLoading && <Loader />}
    </Form>
  );
};

export default ProfileForm;
