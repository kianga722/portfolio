import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profilePic from './profilePic.jpg'
import ytshuffle from './ytshuffle.png'
import cnotify from './cnotify.jpg'
import userInfo from './userInfo.png'



class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='nav-wrapper'>
        <nav className='nav-fixed'>

          <div className='email-address highlight'>
            kianga722@gmail.com
          </div>

          <a href='https://toptester1.github.io' className='brand'>
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
              <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='github'>
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

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='profile'>

        <img src={profilePic} alt='profile pic' />

        <div className='profile-name'>
          <div className='highlight'>
            Andrew Kiang
          </div>
        </div>

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
            <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='github'>
              <i className='fa fa-github'></i>
              GitHub
            </a>
          </li>  
          <li>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='linkedin'>
              <i className='fa fa-linkedin-square'></i>
              LinkedIn
            </a>
          </li>
        </ul>

      </div>
    )
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='project'>

        <a href={this.props.heroku} target='_blank' rel='noopener noreferrer' className='live'>
          <img src={this.props.image} alt='project screenshot' />
          <div className='live-overlay'>
          </div>
          <div className='view-wrapper'>
            <div className='viewSite'>
              View Site
            </div>
          </div>
        </a>

        <div className='project-links'>
          <a href={this.props.heroku} target='_blank' rel='noopener noreferrer' className='view'>
            view
          </a>
          <a href={this.props.repo}target='_blank' rel='noopener noreferrer' className='github'>
            <i className='fa fa-github'></i>
            repo
          </a>
        </div>

        <div className='project-title highlight'>
          {this.props.title}
        </div>
                
        <div className='project-info'>
          {this.props.description}
        </div>

      </div>
    )
  }
}


class ProjectContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='projects'>

        <div className='title'>
          Projects
        </div>

        <div className='projects-display'>
          <Project heroku='https://herokuapp.com'
                   repo='https://github.com'
                   image={ytshuffle}
                   title='ytshuffle'
                   description='Built primarily using Rails, this project shuffles and plays Youtube playlists'
          />
          <Project heroku='https://herokuapp.com'
                   repo='https://github.com'
                   image={cnotify}
                   title='cnotify'
                   description='Made using Rails and JavaScript, this project helps find events personalized to my tastes'
          />
          <Project heroku='https://herokuapp.com'
                   repo='https://github.com'
                   image={userInfo}
                   title='your-info'
                   description='This project aims to experiment with React and to display info that can be obtained from a user simply visiting a website'
          />
        </div>

      </div>
    )
  }
}


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //KONAMI code
      secretCode: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      pressed: []
    }
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp(e) {
    let pressedNew = this.state.pressed.concat(e.keyCode);
    pressedNew.splice(0, pressedNew.length - this.state.secretCode.length);

    this.setState({
      pressed: pressedNew
    })

    if (this.state.pressed.join() === this.state.secretCode.join()) {
      alert('Contact me at kianga722@gmail.com')
    }
  }

  render() {
    return(
      <div className='page-wrap'>
        <Nav />
        <div className='content'>
          <Profile />
          <ProjectContainer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
)
