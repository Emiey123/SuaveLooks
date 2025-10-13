import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../../../data/products.json'
import RatingStars from '../../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/features/cart/cartSlice';


const SingleProduct = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = products.find(p => String(p.id) === String(id));

        if (!product) {
            return (
                <section className='section__container bg-primary-light'>
                    <h2 className='section__header'>Product Not Found</h2>
                    <div className="section__subheader">
                        <span><Link to='/'>Home</Link></span>
                        <i className='ri-arrow-right-s-line'></i>
                        <span><Link to='/shop'>Shop</Link></span>
                    </div>
                </section>
            );
        }

        const handleAddToCart = () => {
            dispatch(addToCart(product));
        };

        return (
            <>
                <section className='section__container bg-primary-light'>
                    <h2 className='section__header'>{product.name}</h2>
                    <div className="section__subheader">
                        <span><Link to='/'>Home</Link></span>
                        <i className='ri-arrow-right-s-line'></i>
                        <span><Link to='/shop'>Shop</Link></span>
                        <i className='ri-arrow-right-s-line'></i>
                        <span className='hover:text-primary'>{product.name}</span>
                    </div>
                </section>

                <section className='section__container mt-8'>
                    <div className="grid md:grid-cols-2 gap-8 single-product">
                        <div>
                            <img src={`/src/assets/Images/${product.image}`} alt={product.name} className=''/>
                        </div>
                        <div className='single-product-content'>
                            <h3 className='text-2xl font-bold mb-2'>{product.name}</h3>
                            <h4 className='mb-2'>Price: NGN{product.price} {product.oldPrice ? <span><s>NGN{product.oldPrice}</s></span> : null}</h4>
                            <h5 className='mb-2'>{product.description}</h5>
                            <p className='mb-2'>Brand: {product.brand}</p>
                            <p className='mb-2'>Category: {product.category}</p>
                            <p className='mb-2'>Color: {product.color}</p>
                            <div className='single-product-rating'>
                                <strong>Rating:</strong>
                                <RatingStars rating={product.rating} />
                            </div>
                            <button className='btn mt-4' onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </section>
            </>
        );
}

export default SingleProduct