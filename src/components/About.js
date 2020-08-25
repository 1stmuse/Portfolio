import React, {useRef, useEffect} from 'react'
import {TimelineLite} from 'gsap'

export const About = ({pro}) =>{
    let intro = useRef(null)
    let sm = useRef(null)
    let md = useRef(null)
    let hello = useRef(null)
    let para = useRef(null)
    let pBtn = useRef(null)
    let wBtn = useRef(null)

    useEffect(()=>{
        let tl = new TimelineLite()
        console.log(intro)

        tl.from(hello,{y:'80px', duration:.9},'start')
            .from(para, {y:100, duration:.9}, .2)
            .from(pBtn,{x:-50, ease:'elastic(1,1)', duration:1,opacity:0},.2)
            .from(wBtn,{x:-50, ease:'elastic(1,1)', duration:1,opacity:0},.4)

        tl.fromTo(sm,{x:'-80%',opacity:0},{x:0,opacity:1, ease:"elastic.out(1, 1)", duration:1.2, delay:.5 }, 'start')
            .from(md,{ x:'80%', ease:"elastic.out(1, 1)", duration:1, delay:.5},.1)
    },[])

    return(
        <div className='about' style={{height:window.innerHeight}} >
            <div className='intro' ref={el=> intro=el} >
                <div className='el-div' >
                    <p ref={el=>hello=el} className='h2-name' >
                        <span className='hello' >Hello, i am </span>
                        <span className='name'>Akinnagbe <span className='olu'>Oluwasegun</span>.</span>
                    </p>
                </div>
                <div className='para-div'>
                    <p className='para' ref={el =>para=el}>I am a software engineer based in Lagos state,
                        i make beautiful things on the web and catch cruise i'm also a Dog lover
                    </p>
                </div>
                <div className='links'>
                    <div className='project-btn' ref={el=>pBtn=el} onClick={()=>pro(true)} >Projects</div>
                    <div className='writing-btn' ref={el=>wBtn=el} >Writings</div>
                </div>
            </div>
            <div className='icons'>
                <a href="https://facebook.com/olysegs"><i className="fa fa-facebook fa-2x icon" aria-hidden="true"></i></a>
                <a href="https://www.twitter.com/1st_muse"><i className="fa fa-twitter fa-2x icon" aria-hidden="true"></i></a>
                <a href="https://www.github.com/1stmuse"><i className="fa fa-github fa-2x icon" aria-hidden="true"></i></a>
            </div>
            <div className='about-rh sm' ref={el=>sm=el} > </div>
            <div className='about-rh md' ref={el=>md=el} >  </div>

        </div>
    )
}

// #128522;