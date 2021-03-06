import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage } from '../../actions/uiStateAction';

const Home = (props) => {
  const { history } = props;

  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPage('Home'));
  }, []);

  if (isAuthenticated) {
    history.push('/dashboard');
  }

  return (
    <div className='hero-bg'>
      <div className='hero-content'>
        <h1 className='display-2 text-center'>Welcome Home</h1>
        <p className='lead text-center'>
          DEVLY's purpose is to consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <div className='hero-btn-group mt-5'>
          <Button size='lg' variant='outline-light' href='/sign-in'>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
