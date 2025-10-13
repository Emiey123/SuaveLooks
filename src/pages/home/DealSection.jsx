import React from 'react'
import dealsImg from '../../assets/Images/bannerImg.png'

const DealSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className="deals__image">
            <img src={dealsImg} alt="" />
        </div>

        <div className="deals__content">
            <h5>Get Up To 20% Discount</h5>
            <h4>Deal Of This Month</h4>
            <p>Step into this season with SuaveLooks. Enjoy up to 20% off our premium collection of shirts, polos, and chinos .
                Refresh your wardrobes with timeless fashion at unbeatable prices. Grab the latest arrivals in men's fashion before the offer runs out. Shop smart, Dress sharper.
            </p>
            <h3>Offer Ends In:</h3>
            <div className="deals__countdown flex-wrap">
                <div className='deals__countdown__card'>
                    <h4>24</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>21</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>59</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>09</h4>
                    <p>Secs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DealSection