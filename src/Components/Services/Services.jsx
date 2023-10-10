import './Services.css'
import {servicesData} from '../../Utils/consts.js'
import Card from '../Card/Card'

function Services() {

    return(
        <section className='services'>
            <h2 className='services__label label'>Services</h2>
            <div className='services__types'>
                {servicesData.map((service, i) => <Card object={service} key={i}/>)}
            </div>
        </section>
    )
}

export default Services