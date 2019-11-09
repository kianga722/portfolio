import React from 'react';

const Navbar = () => {
  return (
    <header className='nav-wrapper'>
      <nav className='nav-fixed'>

        <div className='email-address highlight'>
          kianga722@gmail.com
        </div>

        <a href='https://kianga722.github.io' className='brand'>
          <div>
            Andrew Kiang
          </div>
        </a>

        <div className='email-wrapper'>
          <a
            href='mailto:kianga722@gmail.com' className='email'
          >
            <i className='fa fa-envelope-square'></i>
          </a>
          <span className='highlight'>
            kianga722@gmail.com
          </span>
        </div>
    
        <a
          href='https://github.com/kianga722' target='_blank'
          rel='noopener noreferrer'
          className='github'
        >
          <i className='fa fa-github'></i>
          GitHub
        </a>

      </nav>
    </header>
  )
}

export default Navbar;