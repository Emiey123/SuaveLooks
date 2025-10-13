import React from 'react'
import { Link} from 'react-router-dom'
import BannerImg from '../../assets/Images/bannerImg.png'


const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className="header__content z-30">
            <h4>Up To 30% Discount Off</h4>
            <h1>Refined Looks. Effortless Confidence. Timeless Appeal.</h1>
            <p>At SuaveLooks, we believe men's fashion should be bold, smart, and effortlessly cool. Whether you are dressing for work , 
              weekends,or night out, our curated collections blend classics tailoring with modern trends so you can always steps out 
              in style. 
            </p>
            <button className='btn text-white'><Link to='/shop'> Explore Now</Link> </button>
        </div>
        <div className="header__image">
            <img src={BannerImg} alt="banner image" />
        </div>
    </div>
    
  )
  
}

export default Banner