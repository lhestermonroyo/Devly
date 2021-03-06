import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import Main from '../../components/Main';
import Posts from '../../components/Posts';
import LoadingScreen from '../../components/LoadingScreen';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileAction';
import { getAllPosts } from '../../actions/postAction';
import { getCurrentPage } from '../../actions/uiStateAction';

const Dashboard = (props) => {
  const { history } = props;
  const { profileDetails, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { posts, loading: postLoading } = useSelector((state) => state.post);
  const { userDetails } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPage('Dashboard'));
    dispatch(getCurrentProfile());
    dispatch(getAllPosts());
  }, []);

  return profileLoading || postLoading ? (
    <LoadingScreen loadingMsg='Loading page, please wait...' />
  ) : (
    <Main>
      <h1>Dashboard</h1>
      {!profileDetails ? (
        <Card>
          <Card.Body>
            <p className='lead'>
              Welcome,{' '}
              {userDetails &&
                `${userDetails.firstname} ${userDetails.lastname}`}
            </p>
            <p>
              Looks like that you didn't setup your profile yet. Edit your
              profile to get recognized.
            </p>
            <Button href='/edit-profile#profile-details'>Edit Profile</Button>
          </Card.Body>
        </Card>
      ) : (
        <React.Fragment>
          {posts && (
            <Posts posts={posts} userDetails={userDetails} history={history} />
          )}
        </React.Fragment>
      )}
    </Main>
  );
};

export default Dashboard;
