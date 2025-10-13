import React from 'react'
import gallary1 from '../assets/Images/hero1.png'
import gallary2 from '../assets/Images/bottegahat.png'
import gallary3 from '../assets/Images/hero3.png'
import gallary4 from '../assets/Images/hero.png'
import gallary5 from '../assets/Images/oakley.png'
import gallary6 from '../assets/Images/burbshirt1.png'

const Footer = () => {
  return (
    <>
        <footer className='section__container footer__container'>
            <div className="footer__col">
                <h4 className=''>CONTACT</h4>
                <p>
                    <span><i className='ri-map-pin-2-fill'></i></span>
                    A1, Asher Plaza, Kubwa Abuja
                </p>
                <p>
                    <span><i className='ri-mail-fill'></i></span>
                    support@SuaveLooks.com
                </p>
                <p>
                    <span><i className=''></i></span>
                    (+234) 816 8490 0530
                </p>
            </div>
            <div className="footer__col">
                <h4>COMPANY</h4>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Work With Us</a>
                <a href="/">Our Blogs</a>
                <a href="/">Terms And Condition</a>
            </div>

            <div className="footer__col">
                <h4>USEFUL LINK</h4>
                <a href="/">Help</a>
                <a href="/">Track Your Order</a>
                <a href="/">Accessories</a>
                <a href="/">Fashion</a>
                <a href="/">Style</a>
            </div>
            <div className="footer__col">
                <h4>GALLARY</h4>
                <div className="instagram__grid">
                    <img src={gallary5} alt="" />
                    <img src={gallary6} alt="" />
                    <img src={gallary1} alt="" />
                    <img src={gallary2} alt="" />
                    <img src={gallary3} alt="" />
                    <img src={gallary4} alt="" />
                </div>
            </div>
        </footer>
        <div className="footer__bar">
            Copyrigth &copy; 2025 SuaveLooks. All rights reserved
        </div>
    </>
  )
}

export default Footer