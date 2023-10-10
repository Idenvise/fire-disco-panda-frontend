import './Cases.css'

function Cases({screenWidth}) {
    

    return(
        <section className='cases'> 
            <h2 className='cases__label label'>Cases</h2>
            <div className='cases__container'>
                <div className='cases__steps two-first'>
                    <div className='cases__step'>
                        <p className='cases__big-number'>1</p>
                        <h3 className='cases__name'>Talk to us</h3>
                        <p className='cases__description'>By understanding what your goals are, we can offer 
                        solutions that will help you move forward</p>
                    </div>
                    <div className='cases__step'>
                        <p className='cases__big-number'>2</p>
                        <h3 className='cases__name'>Create a plan</h3>
                        <p className='cases__description'>We will help you make a full-fledged plan for the development
                         and implementation of the project</p>
                     </div>
                </div>
                <img className='cases__image' src={`${screenWidth > 1200 ? 'images/cases__image.png' : screenWidth < 1201 && screenWidth > 660 ? 'images/cases__image-768.png' : 'images/cases__image-320.png'}`} alt='Примеры' />
                <div className='cases__steps two-last'>
                    <div className='cases__step'>
                        <p className='cases__big-number'>3</p>
                        <h3 className='cases__name'>Choose a service</h3>
                        <p className='cases__description'>Learn more about services and development stages</p>
                    </div>
                    <div className='cases__step last-step'>
                        <p className='cases__big-number last-number'>4</p>
                        <h3 className='cases__name'>Get Improved</h3>
                        <p className='cases__description'>Get a great result, which will help you improve your 
                        work and speed up your growth</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cases

//<img className='cases__image' src={`${screenWidth < 1201 ? 'images/cases__image-768.png' : 'images/cases__image.png'}`} alt='Примеры' />