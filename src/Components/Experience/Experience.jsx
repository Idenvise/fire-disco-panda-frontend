import './Experience.css'
import {expirienceData} from '../../Utils/consts.js'
import Card from '../Card/Card'

function Experience() {

    return(
        <section className='experience' > 
            <h2 className='experience__label label'>Our experience</h2>
            <div className='experience__company'>
                {expirienceData.map((exp, i) => <Card object={exp} key={i}/>)}
            </div>
        </section>
    )
}

export default Experience