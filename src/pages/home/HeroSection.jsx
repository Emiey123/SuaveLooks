import React from 'react'
import card1 from '../../assets/Images/hero.png'
import card2 from '../../assets/Images/hero1.png'
import card3 from '../../assets/Images/hero2.png'
import card4 from '../../assets/Images/hero3.png'

const HeroSection = () => {
    const cards =[
       { 
        id : 1,
        image:card1 ,
        trend: 'Aug, 2025 Trend',
        title:'Men Summer Wear'
        },
        {
        id : 2,
        image: card2,
        trend: 'Aug, 2025 Trend',
        title:'Men Sunglasses'
        },
        {
        id : 3,
        image: card3,
        trend: 'Aug, 2025 Trend',
        title:'Men Shirt '
        },
        {
        id : 4,
        image: card4,
        trend: 'Aug, 2025 Trend',
        title:'Men Casuals'
        }
    ]
  return (
    <section className='section__container hero__container'>
        {
            cards.map((card) => (
                <div className="hero__card" key={card.id}>
                    <img src={card.image} alt="" />
                    <div className="hero__content">
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href="#">Discover More</a>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default HeroSection