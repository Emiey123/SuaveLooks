import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModal from '../pages/shop/CartModal'

const Navbar = () => {

    const products = useSelector((state) =>state.cart.products)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const handleCartToggle = () =>{
        setIsCartOpen(!isCartOpen)
    }

  return (
    <header className='fixed-nav-bar w-nav'>
        <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between item-center">
            <ul className="nav__links">
                <li className='link'><Link to="/">Home</Link></li>
                <li className='link'><Link to="/shop">Shop</Link></li>
                <li className='link'><Link to="/pages">Pages</Link></li>
                <li className='link'><Link to="/contact">Contact</Link></li>
            </ul>
            {/* {logo} */}
            <div className="nav__logo">
                <Link to="/">SuaveLooks</Link>
            </div>
            {/* {nav icons} */}
            <div className="nav__icons relative">
                <span>
                    <Link to="login">
                        <i className="ri-user-6-fill"></i>
                    </Link>
                </span>
                <span className='bag' onClick={handleCartToggle}>
                    <i className='ri-shopping-bag-line'></i>
                    <sup>{products.length}</sup>
                </span>
                <span>
                    <Link to="search">
                        <i className="ri-search-line"></i>
                    </Link>
                </span>
            </div>
        </nav>
        {
            isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle}/>
        }
    </header>
  )
}

export default Navbar