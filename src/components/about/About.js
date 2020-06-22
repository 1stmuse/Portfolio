import React from 'react'
import './about.css'


export const About = () =>{


    return(
        <div className='abt'>
            <img src='https://res.cloudinary.com/muse1/image/upload/v1586108218/Screenshot_20200405-175559_c4ukd7.png' alt='profile '/>
            <h2>Hello,  <span>&#128522;</span> <br/> i am Akinnagbe Oluwasegun</h2>
            <p>A self taught fullstack developer based in Lagos state ,
                i make beautiful things on the web and catch cruise
            </p>
            <div class="icons">
                <a href="https://facebook.com/olysegs"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.twitter.com/1st_muse"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.github.com/1stmuse"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.github.com/1stmuse"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}