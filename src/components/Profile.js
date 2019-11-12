import React from 'react';

import AvatarFlip from './AvatarFlip';
import NameDraw from './NameDraw';

const Profile = () => {
  const handleDrawRestart = () => {
    const draw = document.querySelector('#AndrewKiang tspan');
    const eleClone = draw.cloneNode(true);
    draw.parentNode.replaceChild(eleClone, draw)
  }

  return (
    <header className='profile'>

      <AvatarFlip />

      <h1 className='profile-name'>
        <NameDraw
          handleDrawRestart={handleDrawRestart}
        />
      </h1>

      <div className='profile-location'>
        <span>web developer</span> based in NYC
      </div>

      <ul className='profile-links'>
        <li>
          <a href='mailto:kianga722@gmail.com' className='email'>
            <i className='fa fa-envelope-square'></i>
            Email
          </a>
        </li>
        <li>
          <a href='https://github.com/kianga722' target='_blank' rel='noopener noreferrer' className='github'>
            <i className='fa fa-github'></i>
            GitHub
          </a>
        </li>  
        <li>
          <a href='https://www.linkedin.com/in/kianga' target='_blank' rel='noopener noreferrer' className='linkedin'>
            <i className='fa fa-linkedin-square'></i>
            LinkedIn
          </a>
        </li>
      </ul>

    </header>
  )
}


export default Profile;