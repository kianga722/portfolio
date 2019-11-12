import React, {useState} from 'react';
import profilePic from '../images/profPic.png';

const AvatarFlip = () => {
  const [jump, setJump] = useState(false)

  const resetAnimation = () => {
    const el = document.querySelector('.flip-coin');
    el.style.animation = 'none';
    el.getBoundingClientRect(); /* trigger reflow */
    el.style.animation = null; 
  }

  const handleClick = () => {
    resetAnimation();
    setJump(true)
  }

  return (
    <div
      className={`flip-coin ${jump ? 'jump' : ''}`}
      onClick={handleClick}
      onAnimationEnd={() => setJump(false)}
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