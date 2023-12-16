import React from 'react'
import "./Home.css"
import home from "../../Assests/home.jpg"

export const Home = () => {
  return (
    <div>
      <div className="cover-image-container" id="Home">
        <img className='about-img' src={home} alt="about-img" />
      </div>
      <div className='overlay'>
        <h2 className=' description description-title'>Most Delecious Combos</h2>
        <p className=' description description-des'>Feels Like Home,<br/> Tastes  
        Like Paradise.
        </p>
      </div>
    </div>
  )
}
export default Home