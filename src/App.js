
import React, {Component} from 'react';
import './App.css';
import Particles from './components/Particle'
import {About} from './components/about/About'
import {Tech} from './components/tech/Tech'

class App extends Component  {
  
  constructor(){
    super()
    this.state={
      tech:false,
      about:true
    }
  }


  render(){
    return (
      <div style={{position:'relative', height:'100vh'}}>
        <Particles>
  
        </Particles>
        <Header/>
        <div className='app'>
          <div> <About/> </div>
          <div> <Tech/></div>
        </div>
      </div>
    );
  }
}

export default App;
