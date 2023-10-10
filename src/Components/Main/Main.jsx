import './Main.css'

function Main() {

    return(
        <main className='main'>
            <div className='main__wrapper-about'>
                <div className='main__about-comp'>
                    <h1 className='main__company'>Web Development Outsourcing</h1>
                    <p className='main__for'>for business and digital agencies</p>
                </div>
                <div className='main__name'/>
            </div>
            <div className='main__wrapper-images'>
                <img className='main__image' src='images/1cft.svg' alt='Центр финансовых технологий'/>
                <img className='main__image' src='images/Chernika.svg' alt='Черника'/>
                <img className='main__image' src='images/2wtrade.svg' alt='2WTrade'/>
                <img className='main__image' src='images/mmfks.svg' alt='Фестиваль круг света'/>
                <img className='main__image main__image_S7' src='images/S7.svg' alt='S7'/>
                <img className='main__image' src='images/alfa__bank.svg' alt='Альфа банк'/>
                <img className='main__image' src='images/readom.svg' alt='Readom'/>
            </div>
        </main>
    )
}

export default Main