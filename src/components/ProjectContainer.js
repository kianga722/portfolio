import React, { Component } from 'react';
import Project from './Project';
import workout531 from '../images/531workout.png'
import layoutscroll from '../images/layoutscroll.png'
import motivator from '../images/motivator.png'
import nsong from '../images/nsong.png'
import ytshuffle from '../images/ytshuffle.png'
import cnotify from '../images/cnotify.jpg'
import statusw from '../images/statusw.png'
import yourinfo from '../images/yourinfo.png'

class ProjectContainer extends Component {
  render() {
    return(
      <div className='projects'>
            <div className='title'>Projects</div>
            <div className='projects-display'>
              <Project
                site='https://workout531.herokuapp.com/'
                repo='https://github.com/kianga722/531workout'
                image={workout531}
                title='531workout'
                description='Generates workouts for the 5/3/1 lifting program using React, Node, and MongoDB '
              />
              <Project
                site='https://nsong.herokuapp.com'
                repo='https://github.com/kianga722/nsong'
                image={nsong}
                title='nsong'
                description='Displays recent songs from popular Youtube channels using React, Express, and the Youtube API'
              />
              <Project
                site='https://dudejustdoit.herokuapp.com'
                repo='https://github.com/kianga722/motivator'
                image={motivator}
                title='motivator'
                description='Uses React, Express, and MongoDB to display random motivational quotes and videos'
              />
              <Project
                site='https://kianga722.github.io/layoutscroll'
                repo='https://github.com/kianga722/layoutscroll'
                image={layoutscroll}
                title='layoutscroll'
                description='Infinitely scrolling layout generator using HTML, CSS, and JavaScript'
              />
              <Project
                site='https://ytshuffle.herokuapp.com/'
                repo='https://github.com/kianga722/ytshuffle'
                image={ytshuffle}
                title='ytshuffle'
                description='Built primarily using Rails, this project shuffles and plays Youtube playlists'
              />
              <Project
                site='https://cnotify.herokuapp.com/'
                repo='https://github.com/kianga722/cnotify'
                image={cnotify}
                title='cnotify'
                description='Made using Rails and JavaScript, this project helps find events personalized to my tastes'
              />
              <Project
                site='https://statuspog.herokuapp.com/'
                repo='https://github.com/kianga722/statusw'
                image={statusw}
                title='statusw'
                description='Using React and Express, displays the online status of Twitch streamers and updates live'
              />
              <Project
                site='https://kianga722.github.io/yourinfo/'
                repo='https://github.com/kianga722/yourinfo'
                image={yourinfo}
                title='yourinfo'
                description='Created with React, displays info that can be obtained from a user simply visiting a website'
              />
            </div>
          </div>
    )
  }
}

export default ProjectContainer;