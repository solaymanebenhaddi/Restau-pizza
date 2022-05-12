import React from 'react'
import MultiplePizzas from '../assets/img/multiplePizzas.jpeg'
import '../styles/about.css'
function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage : `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur et architecto dolor repudiandae vel facilis numquam quo recusandae accusantium? Quia delectus dicta quisquam nostrum commodi, ratione optio eaque ex. Voluptatem quasi non quae dicta, reprehenderit expedita! Cum pariatur modi blanditiis exercitationem tempore. Voluptate, dolore cumque.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur et architecto dolor repudiandae vel facilis numquam quo recusandae accusantium? Quia delectus dicta quisquam nostrum commodi, ratione optio eaque ex. Voluptatem quasi non quae dicta, reprehenderit expedita! Cum pariatur modi blanditiis exercitationem tempore. Voluptate, dolore cumque.</p>
        </div>
    </div>
  )
}

export default About