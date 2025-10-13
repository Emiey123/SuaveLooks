import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from '../../data/products.json'

const TrendingProduct = () => {
    const[visibleProducts, setVisibleProducts] = useState(8)
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount =>  prevCount + 8)
    }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trending</h2>
        <p className='section__subheader mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias 
            cupiditate eum, dicta voluptates vel laudantium.</p>
            {/* product */}
            <div className="">
              <ProductCards products={products.slice(0, visibleProducts)}/>
            </div>

            {/* Loadmore */}

                    <div className="product__btn">
                        {
                            visibleProducts < products.length && (
                                <button className="btn" onClick={loadMoreProducts}>Load More</button>
                            )                        
                        }
                    </div>
    </section>
  )
}

export default TrendingProduct