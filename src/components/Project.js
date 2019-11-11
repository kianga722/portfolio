import React from 'react';
import Tilt from 'react-tilt';

const Project = ({
  site,
  repo,
  image,
  title,
  description
}) => {
  return (
    <Tilt options={{scale: 1, reverse: true}}>
    <article
      className='project'
    >

      <a href={site} target='_blank' rel='noopener noreferrer' className='live'>
        <img src={image} alt='project screenshot' />
        <div className='live-overlay'>
        </div>
        <div className='view-wrapper'>
          <div className='viewSite'>
            View Site
          </div>
        </div>
      </a>

      <div className='project-links'>
        <a href={site} target='_blank' rel='noopener noreferrer' className='view'>
          view
        </a>
        <a href={repo}target='_blank' rel='noopener noreferrer' className='github'>
          <i className='fa fa-github'></i>
          repo
        </a>
      </div>

      <h1 className='project-title highlight'>
        {title}
      </h1>
              
      <p className='project-info'>
        {description}
      </p>

      </article>
      </Tilt>
  )
}

export default Project;