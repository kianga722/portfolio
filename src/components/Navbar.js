import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <nav className='nav-fixed'>

          <div className='email-address highlight'>
            kianga722@gmail.com
          </div>

          <a href='https://kianga722.github.io' className='brand'>
            <div>
              Andrew Kiang
            </div>
          </a>

          <ul className='contact-links'>
            <li>
              <a href='mailto:kianga722@gmail.com' className='email'>
                <i className='fa fa-envelope-square'></i>
              </a>
              <span className='highlight'>kianga722@gmail.com</span>
            </li>
            <li>
              <a href='https://github.com/kianga722' target='_blank' rel='noopener noreferrer' className='github'>
                <i className='fa fa-github'></i>
                GitHub
              </a>
            </li>  
          </ul>

        </nav>
      </div>
    )
  }
}

export default Navbar;