import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProjectContainer from './components/ProjectContainer';

function App() {
  return ( 
    <div className='page-wrap'>
      <Navbar />
      <main className='content'>
        <Profile />
        <ProjectContainer />
      </main>
    </div>
  )
}


export default App;