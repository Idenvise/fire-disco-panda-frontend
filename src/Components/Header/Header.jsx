import { useState } from 'react'
import BurgerPanel from '../BurgerPanel/BurgerPanel'
import './Header.css'

function Header({screenWidth}) {
    const [burgerOpen, setBurgerOpen] = useState(false);

    function openBurger() {
        burgerOpen || setBurgerOpen(true);
    }

    return(
        <header className='header'>
            <div className='header__company-info'>
                <p className='header__name'>Fire Disco Panda</p>
                <p className='header__about'>Web Integrator</p>
            </div>
            <nav className='header__nav'>
                { screenWidth>768 ?
                    <>
                    <button className='header__nav-button button'>Main</button>
                    <button className='header__nav-button button'>Services</button>
                    <button className='header__nav-button button'>Cases</button>
                    <button className='header__nav-button button'>Clients</button>
                    <button className='header__nav-button button'>Team</button>
                    <button className='header__nav-button button'>Contact Us</button>
                    </> : ''
                }
                <div className='header__lang-burger'>
                    <p className='header__lang'>EN</p>
                    <button className='header__burger' type='button' onClick={openBurger}/>
                </div>
                <BurgerPanel burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>
            </nav>
        </header>
    )
}

export default Header