
import React, {Component} from 'react';
import './App.css';
import Particles from './components/Particle'
import {Header} from './components/header/Header'
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

  clickTech =()=>{
    this.setState({
      about : !this.state.about
    })
  }
  render(){
    const {tech, about} = this.state
    return (
      <div style={{position:'relative', height:'100vh'}}>
        <Particles>
  
        </Particles>
        <Header/>
        <div className='app'>
          <div className={about?'about-comp': 'about-anim'}><About/> </div>
          <div className={tech?'tech-anim': 'tech-comp'}><Tech/></div>
        </div>
        <button onClick={this.clickTech} >home</button>
      </div>
    );
  }
}

export default App;
