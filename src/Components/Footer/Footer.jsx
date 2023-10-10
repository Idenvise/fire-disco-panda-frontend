import './Footer.css'

function Footer({screenWidth}) {
    return(
        <footer className='footer'>
            <div className='footer__privacy'>
                <p className='footer__privacy-policy privacy'>Privacy Policy</p>
                <p className='footer__year privacy'>2020-2021 FDP</p>
            </div>
            <div className='footer__wrapper'>
                <div className='footer__container'>
                    <div className='footer__about-privacy'>
                        <p className='footer__fdp'>ООО «ФДП» © 2021</p>
                        <p className='footer__check-privacy'>Политика конфиденциальности</p>
                    </div>
                    {screenWidth > 600 ? <img className='footer__image' src='images/footer__panda-left.png' alt='Панда'/> : ''}
                    <img className='footer__image footer__image-fdp' src='images/footer__fdp.png' alt='fdp'/>
                    {screenWidth > 1000 ? <img className='footer__image' src='images/footer__panda-right.png' alt='Панда'/> : ''}
                    <div className='footer__email-phone'>
                        <p className='footer__email'>Email: firediscopandallc@gmail.com</p>
                        <p className='footer__phone'>Телефон: 8-999-999-9999</p>
                    </div> 
                </div>
                {screenWidth < 601 ? <img className='footer__image' src='images/footer__panda-left.png' alt='Панда'/> : ''}
            </div>
            
        </footer>
    )
}

export default Footer