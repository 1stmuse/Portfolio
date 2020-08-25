import React, {useEffect,useRef} from 'react'
import {TimelineLite} from 'gsap'

import {projects} from '../data'

export const Tech = ({pro}) =>{

    const show=()=>{
        let tl = new TimelineLite()
        tl.to('ul.lists li',{scaleY:1, duration:.4, stagger:.1, transformOrigin:'bottom left'})
        setTimeout(()=>{
            pro(false)
        }, 520)
        // pro(false)
    }

    const showProjects =()=>{
       return projects.map(pro=>(
            <div key={pro.id} className='card'>
                <div className='img-div'>
                    <img src={pro.img} alt='alternative display'/>
                </div>
                <div className='descrip'>
                    <p>{pro.description} </p>
                    <p><i>{pro.tech} </i></p>
                </div>
                <div className='nav-icons'>
                    <a target='_blanck' href={pro.github} ><i className="fa fa-github fa-2x icon" aria-hidden="true"></i></a>
                    <a target='_blanck' href={pro.url} ><i class="fa fa-external-link" aria-hidden="true"></i></a>
                </div>
            </div>
        ))
    }

    useEffect(()=>{
        let tl = new TimelineLite()
            tl.to('ul.lists li',{scaleY:0, duration:.4, stagger:.1, transformOrigin:'bottom left'})
    },[])

    return(
        <div className='tech'>
            <ul className='lists'>
                <li ></li>
                <li></li>
                <li ></li>
                <li ></li>
                <li ></li>
            </ul>
            <div className='back-arrow' onClick={show} ><i className='fa fa-long-arrow-left' style={{cursor:'pointer',marginLeft:'40px'}} ></i></div>
            <h3 className='h3'>Here are some of the projects i've worked on !</h3>
            <div className='project-grid'>
                {showProjects()}
            </div>
        </div>
    )
}