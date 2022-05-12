import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/img/pizza.jpeg'
import '../styles/home.css'
function Home() {
  return (
    <div className='home' style={{backgroundImage : `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/order"><button>ORDER NOW</button></Link>
      </div>
    </div>
  )
}

export default Home