import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className="banner__card">
            <span><i className='ri-user-voice-fill'></i></span>
            <h4>24/7 Customer Support</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, perspiciatis!</p>
        </div>

        <div className="banner__card">
            <span><i className='ri-money-dollar-circle-line'></i></span>
            <h4>Refund Policy Guaranty</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, perspiciatis!</p>
        </div>

        <div className="banner__card">
            <span><i className='ri-truck-line'></i></span>
            <h4>Safe Delivery</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, perspiciatis!</p>
        </div>
        
    </section>
  )
}

export default PromoBanner