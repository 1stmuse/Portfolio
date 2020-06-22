
import React, {Component} from 'react';
import './App.css';
import Particles from './components/Particle'
import {About} from './components/about/About'
import {Tech} from './components/projects/Tech'

class App extends Component  {
  
  constructor(){
    super()
    this.state={
      left:0
    }
  }


  render(){
    return (
      <div>
        <Particles>
  
        </Particles>
        <div className='app'>
          <div className='container' style={{transform:`translateX(${this.state.left}vw)`}}>
            <div className='about-slide' > <About/> </div>
            <div className='project-slide'><Tech/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
