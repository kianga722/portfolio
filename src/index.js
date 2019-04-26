import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProjectContainer from './components/ProjectContainer';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //KONAMI code
      secretCode: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      pressed: []
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = (e) => {
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
        <Navbar />
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
