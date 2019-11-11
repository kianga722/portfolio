import React from 'react';
import profilePic from '../images/profPic.png';

const AvatarFlip = ({
  handleDrawRestart
}) => {
  return (
    <div
      className='flip-coin'
      onClick={handleDrawRestart}
    >
      <div className='flip-inner'>
        <img
          className='flip-front'
          src={profilePic}
          alt='profile pic'
        />
        <div className='flip-back'>
          <span>A</span>
          <span>K</span>
        </div>
      </div>
    </div>
  )
}

export default AvatarFlip;