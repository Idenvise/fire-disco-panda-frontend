import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Services from '../Services/Services';
import Cases from '../Cases/Cases';
import Experience from '../Experience/Experience';
import AboutUs from '../AboutUs/AboutUs';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import { useState } from 'react';


function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function() {
        setScreenWidth(window.innerWidth)
    })
    return(
        <div className='page'> 
            <Header screenWidth={screenWidth} />
            <Main />
            <Services />
            <Cases screenWidth={screenWidth}/>
            <Experience />
            <AboutUs />
            <Contacts />
            <Footer screenWidth={screenWidth}/>
        </div>
    )
}

export default App;


    