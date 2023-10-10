import './Contacts.css'

function Contacts() {

    return(
        <section className='contacts'>
            <h2 className='contacts__label label'>Contact Us</h2>
            <div className='contacts__wrapper'>
                <p className='contacts__map'>MAP</p>
                <form className='contacts__form' name='contact-form'>
                    <p className='contacts__form-name'>Service request</p>
                    <input className='contacts__input' placeholder='Name'/>
                    <input className='contacts__input' placeholder='Tel.'/>
                    <input className='contacts__input' placeholder='Email'/>
                    <input className='contacts__input' placeholder='Choose a service'/>
                    <textarea className='contacts__input' placeholder='Additional information' rows='3'/>
                    <button className='contacts__submit' type='submit'>Send a request</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts