import React, { Component } from 'react';

class Project extends Component {
  render() {
    return(
      <div className='project'>

        <a href={this.props.site} target='_blank' rel='noopener noreferrer' className='live'>
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
          <a href={this.props.site} target='_blank' rel='noopener noreferrer' className='view'>
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

export default Project;