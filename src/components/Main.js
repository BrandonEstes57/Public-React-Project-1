import React from 'react'
import "../style.css"
// import largeLogo from '../images/logo512.png'

export default function Main() {
    return (
        <main>
            <h1 className='mainSectionHeader'>Fun facts about React</h1>
            {/* <img src={largeLogo} className='largeLogo' alt='React logo'/> */}
            <ul className='mainSectionList'>
                <li className='mainLineItem'>Was first released in 2013</li>
                <li className='mainLineItem'>Was originally created by Jordan Walke</li>
                <li className='mainLineItem'>Has well over 100K stars on GitHub</li>
                <li className='mainLineItem'>Is maintained by Facebook</li>
                <li className='mainLineItem'>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>

    )
}