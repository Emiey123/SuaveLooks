import React from 'react'
import category1 from '../../assets/Images/adidasshirt.png'
import category2 from '../../assets/Images/amiricap.png'
import category3 from '../../assets/Images/balenciagashoe.png'
import category4 from '../../assets/Images/akila.png'
import category5 from '../../assets/Images/d1milano.png'
import category6 from '../../assets/Images/beamssock.png'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories=[
        {
            name:'Clothing',
            path: 'clothing',
            image: category1,
        },
        {
            name:'Caps',
            path: 'hat',
            image: category2,
        },
        {
            name:'Footwear',
            path: 'shoes',
            image: category3,
        },
        {
            name:'Sunglasses',
            path: 'sunglasses',
            image: category4,
        },
        {
            name:'Accessories',
            path: 'accessories',
            image: category5,
        },
        {
            name:'Socks',
            path: 'socks',
            image: category6,
        }
    ]
  return (
    <>
        <div className="product__grid">
            {
                categories.map((category) =>(
                    <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
                        <img src={category.image} alt={category.name} />
                        <h4>{category.name}</h4>
                    </Link>
                ))
            }
        </div>
    </>
  )
}

export default Categories