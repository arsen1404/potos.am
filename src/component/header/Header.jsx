import { Link, Route, Routes } from 'react-router-dom'
import './header.css'

export default function Header() {
    return(
        
        <header>
            <nav id='nav'>
            
             <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/slider'>Slider</Link></li>
             </ul>
           
            </nav>
        </header>
    )
}