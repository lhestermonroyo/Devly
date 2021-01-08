import React from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Main from '../../components/Main';
import useForm from '../../customHooks/useForm';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../actions/authAction';
import AlertDismissable from '../../components/Alert';
import Loading from '../../components/Loading';

const SignIn = (props) => {
  const { history } = props;

  const [values, handleChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const dispatch = useDispatch();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signInUser(values));
  };

  if (isAuthenticated) {
    history.push('/dashboard');
  }

  return (
    <Main>
      <Row>
        <Col xs={6} md={3} />
        <Col xs={6} md={6}>
          <h1 className='text-center mb-5'>Sign In</h1>
          <Loading
            loadingMsg={'Logging in, please wait...'}
            loading={loading}
          />
          <AlertDismissable />
          <Form className='mb-4' onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name='email'
                type='email'
                value={email}
                onChange={handleChange}
                required={true}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                type='password'
                value={password}
                onChange={handleChange}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button variant='primary' type='submit' className='btn-block'>
              Sign In
            </Button>
          </Form>
          <hr />
          <Button
            href='/sign-up'
            variant='outline-primary'
            type='submit'
            className='btn-block mt-4'
          >
            Create an Account
          </Button>
        </Col>
        <Col xs={6} md={3} />
      </Row>
    </Main>
  );
};

export default SignIn;
