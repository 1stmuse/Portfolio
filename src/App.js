
import React, {useState} from 'react';
import Particles from './components/Particle'
import {About} from './components/About'
import {Tech} from './components/Tech'

const App =()=> {
  const [pro, setPro]= useState(false)
  const showProject =(arg)=>{
    setPro(arg)
  }
  
  return (
    <div>
      <Particles>

      </Particles>
      <div className='app'>
        {!pro ? <About pro={showProject} /> : <Tech pro={showProject}/>}
      </div> 

    </div>
  );
}

export default App;
