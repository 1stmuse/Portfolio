import React, {useRef, useEffect} from 'react'
import {TimelineLite, Power3, Linear} from 'gsap'

export const About = () =>{
    let intro = useRef(null)
    let sm = useRef(null)
    let md = useRef(null)
    let lg = useRef(null)
    let hello = useRef(null)
    let para = useRef(null)
    let smInner = useRef(null)

    useEffect(()=>{
        let tl = new TimelineLite()
        console.log(intro)

        tl.from(hello,{y:'80px', duration:.9}, 'start')
            .from(para, {y:100, duration:.7}, .2)

        tl.from(md,{rotate:360, repeat:1000, ease:Linear.easeNone, duration:1.5 },.2, 'start')
            .from(sm,{rotate:-360, repeat:1000, ease:Linear.easeNone, duration:1.5},.4)
            .from(smInner,{zIndex:-1,duration:3})
            // .from(lg,{x:1000,}, .6)
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
            <div className='about-rh sm' ref={el=>sm=el} >
                <div className='sm-inner' ref={el => smInner=el} ></div>
            </div>
            <div className='about-rh md' ref={el=>md=el} >
                <div className='md-inner'></div>
            </div>
            {/* <div className='about-rh lg' ref={el=>lg=el} >
                <div className='lg-inner'></div>
            </div> */}

            <div className='left-vert vert'></div>
            {/* <div className='right-vert vert'></div> */}
        </div>
    )
}

// #128522;