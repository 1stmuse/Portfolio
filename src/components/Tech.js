import React, {useEffect,useRef} from 'react'
import {TimelineLite} from 'gsap'

export const Tech = ({pro}) =>{

    const show=()=>{
        let tl = new TimelineLite()
        tl.to('ul.lists li',{scaleY:1, duration:.4, stagger:.1, transformOrigin:'bottom left'})
        setTimeout(()=>{
            pro(false)
        }, 520)
        // pro(false)
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
            <div className='back-arrow' onClick={show} ><i className='fa fa-long-arrow-left'></i></div>
            <h3>Here are some of the projects i've worked on !</h3>
            <div className='project-grid'>
                <h2>whats up people of the world</h2>
                <p>A self taught fullstack developer Yeahh</p>
            </div>
        </div>
    )
}