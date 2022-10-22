import React from 'react'
import './Nav.css'

function Navbar(){
    return(
        <div>
            <nav className='Navbar'>
                <h4>  NavBar</h4>
                <ul className='over'>
                    <li className='o1'> <a href='pricing'>pricing</a></li>
                    <li className='o2'><a href='about'> About</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar




