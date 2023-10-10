import './Card.css'

function Card(props) {
    const {label, sublabel, img, description, tech, tech2} = props.object;
    return(
        <div className='service__type'>
            <div className='service__wrapper'>
                <div className='service__type-container'>
                    <div className='service__label-sublabel'>
                        <h2 className='service__label'>{label}</h2>
                        <p className='service__sublabel'>{sublabel}</p>
                    </div>
                    <img className='service__image' src={img} alt={label}/>
                </div>
                <p className='service__description'>{description}</p>
            </div>
            <p className='service__tech'>{tech}</p>
            {tech2 ? <p className='service__tech'>{tech2}</p> : ''}
        </div> 
    )
}

export default Card