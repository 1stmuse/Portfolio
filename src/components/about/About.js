import React, {useRef, useEffect} from 'react'
import {TimelineLite} from 'gsap'

export const About = () =>{
    let intro = useRef(null)
    let sm = useRef(null)
    let md = useRef(null)
    let hello = useRef(null)
    let para = useRef(null)

    useEffect(()=>{
        let tl = new TimelineLite()
        console.log(intro)

        tl.from(hello,{y:'80px', duration:.9},'start')
            .from(para, {y:100, duration:.9}, .2)

        tl.fromTo(sm,{x:'-80%',opacity:0},{x:0,opacity:1, ease:"elastic.out(1, 1)", duration:1.2, delay:.5 }, 'start')
            .from(md,{ x:'80%', ease:"elastic.out(1, 1)", duration:1, delay:.5},.1)
    },[])

    return(
        <div className='about'>
            <div className='intro' ref={el=> intro=el} >
                <div className='el-div' >
                    <h2 ref={el=>hello=el} >
                        <span className='hello' >Hello, i am </span> <br/>
                        <span className='name'>Akinnagbe Oluwasegun.</span>
                    </h2>
                </div>
                <div className='para-div'>
                    <p className='para' ref={el =>para=el}>I am a software engineer based in Lagos state,
                        i make beautiful things on the web and catch cruise i'm also a Dog lover
                    </p>
                </div>
            </div>
            <div className='icons'>
                <a href="https://facebook.com/olysegs"><i className="fa fa-facebook-square fa-2x icon" aria-hidden="true"></i></a>
                <a href="https://www.twitter.com/1st_muse"><i className="fa fa-twitter fa-2x icon" aria-hidden="true"></i></a>
                <a href="https://www.github.com/1stmuse"><i className="fa fa-github fa-2x icon" aria-hidden="true"></i></a>
                <a href="https://www.github.com/1stmuse"><i className="fa fa-instagram fa-2x icon" aria-hidden="true"></i></a>
            </div>
            <div className='about-rh sm' ref={el=>sm=el} > </div>
            <div className='about-rh md' ref={el=>md=el} >  </div>

            <div className='left-vert vert'></div>
        </div>
    )
}

// #128522;