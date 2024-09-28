import React, { useContext } from 'react';
import { useAppContext } from './AppContext';
import PropTypes from 'prop-types';

const Profile = () => {
  const { user } = useAppContext();

  return (
    <div className='profile'>
      <img src={user.profilePicture} alt={user.name} />
      <h2>{user.name}</h2>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
