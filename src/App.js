
import React, {Component} from 'react';
import Particles from './components/Particle'
import {About} from './components/about/About'
import {Tech} from './components/projects/Tech'

class App extends Component  {
  
  render(){
    return (
      <div>
        <Particles>
  
        </Particles>
        <div className='app'>

          <About/>
          <Tech/>
        </div> 

      </div>
    );
  }
}

export default App;
