import './AboutUs.css'

function AboutUs() {

    return(
        <section className='about'>
            <h2 className='about__label label'>About Us</h2>
            <div className='about__container' >
                <img className='about__peoples' src='images/peoples.png' alt='Группа людей'/>
            </div>
        </section>
    )
}

export default AboutUs