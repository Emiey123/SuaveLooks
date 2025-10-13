import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../../components/RatingStars'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const ProductCards = ({products}) => {
    const dispatch = useDispatch()

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }

  return (
    <div className='product__card'>
        {
            products.map((product, index) =>(
                <div className="product__card1" key={product.id}>
                    <div className='product__image'>
                        <Link to={`/shop/${product.id}`}>
                            <img src={`/src/assets/Images/${product.image}`} alt= {product.name} 
                            className=''/>
                        </Link>

                    </div>
                    
                    <div className="cart">
                       
                        <i className='ri-shopping-cart-2-line  product__cart' onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(product)
                        }}></i>
                        
                    </div>
                    {/* product description */}
                    <div className="product__card__content">
                        <h4>{product.name}</h4>
                        <h4>{product.description}</h4>
                        <p>NGN{product.price} {product.oldPrice ? <s>NGN{product?.oldPrice}</s> : null}</p>
                       <RatingStars rating={product.rating}/>
                    </div>

                    
                </div>
            ))
        }
    </div>
  )
}

export default ProductCards