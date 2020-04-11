import React, {useState} from 'react'
import './header.css'


export const Header = () => {

    return(
        <header>
            <nav>
                <h3>Your Dev</h3>
                <ul className='navigations'>
                    <li>Me</li>
                    <li>what i use</li>
                    <li>my projects</li>
                    <li>say something</li>
                </ul>
            </nav>
        </header>
    )
}

