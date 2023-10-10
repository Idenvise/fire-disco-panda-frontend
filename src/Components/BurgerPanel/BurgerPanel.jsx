import './BurgerPanel.css'

function BurgerPanel({burgerOpen, setBurgerOpen}) {

    function closeBurger() {
        burgerOpen && setBurgerOpen(false)
    }

    return(
        <div className='burger' id={`${burgerOpen ? 'flex' : ''}`}>
            <div className='burger__nav'>
                <button className='header__nav-button button'>Main</button>
                <button className='header__nav-button button'>Services</button>
                <button className='header__nav-button button'>Cases</button>
                <button className='header__nav-button button'>Clients</button>
                <button className='header__nav-button button'>Team</button>
                <button className='header__nav-button button' id='last-button'>Contact Us</button> 
            </div>
            <button className='burger__button' type='button' onClick={closeBurger}/>
        </div>
    )
}

export default BurgerPanel