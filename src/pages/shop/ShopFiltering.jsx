import React from 'react'
import { Link } from 'react-router-dom'

const ShopFiltering =  ({filters, filtersState, setFiltersState, clearFilters}) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
        <span className='filter-icon'>
        <i className="ri-equalizer-2-fill"></i>
        </span>
        Filter

        {/* categories */}
        <div className="shop-filter">
            <h4 className='font-medium'>Category</h4>
            {
                filters.categories.map((category) => (
                    // <label key={category} className='capitalize cursor-pointer'>
                    //     <input type="radio" 
                    //     name='category' 
                    //     id='category' 
                    //     value={category} 
                    //     checked={filtersState.category === category} 
                    //     onChange={(e) => setFiltersState({...filtersState, category: e.target.value})}
                    //     />
                    //     <span className=''>{category}</span>
                    // </label>
                    <Link to={`/shop?category=${category}`}
                    id='category'
                    key={category}
                    className={` shop-filter-link ${filtersState.category === category ? 'shop-filter-link' : ''}`}
                    onClick={() => setFiltersState({...filtersState, category})}
                    >{category}</Link>
                ))
            }
        </div>

        {/* Color */}

        <div className="shop-filter">
            <h4 className='font-medium'>Color</h4>
           
            {
                filters.colors.map((color) => (
                    // <label key={category} className='capitalize cursor-pointer'>
                    //     <input type="radio" 
                    //     name='category' 
                    //     id='category' 
                    //     value={category} 
                    //     checked={filtersState.category === category} 
                    //     onChange={(e) => setFiltersState({...filtersState, category: e.target.value})}
                    //     />
                    //     <span className=''>{category}</span>
                    // </label>
                    <Link to={`/shop?color=${color}`}
                    id='color'
                    key={color}
                    className={` shop-filter-link ${filtersState.color === color ? 'shop-filter-link' : ''}`}
                    onClick={() => setFiltersState({...filtersState, color})}
                    >{color}</Link>
                ))
            }
        </div>

        {/* brand */}
        <div className="shop-filter">
            <h4 className='font-medium'>Brand</h4>
           
            {
                filters.brands.map((brand) => (
                    // <label key={category} className='capitalize cursor-pointer'>
                    //     <input type="radio" 
                    //     name='category' 
                    //     id='category' 
                    //     value={category} 
                    //     checked={filtersState.category === category} 
                    //     onChange={(e) => setFiltersState({...filtersState, category: e.target.value})}
                    //     />
                    //     <span className=''>{category}</span>
                    // </label>
                    <Link to={`/shop?brand=${brand}`}
                    id='brand'
                    key={brand}
                    className={` shop-filter-link ${filtersState.brand === brand ? 'shop-filter-link' : ''}`}
                    onClick={() => setFiltersState({...filtersState, brand})}
                    >{brand}</Link>
                ))
            }
        </div>

        {/* price range */}
            <div className="shop-filter">
            <h4 className='font-medium'>Price Range</h4>
           
            {
                filters.priceRange.map((range) => (
                    // <label key={category} className='capitalize cursor-pointer'>
                    //     <input type="radio" 
                    //     name='category' 
                    //     id='category' 
                    //     value={category} 
                    //     checked={filtersState.category === category} 
                    //     onChange={(e) => setFiltersState({...filtersState, category: e.target.value})}
                    //     />
                    //     <span className=''>{category}</span>
                    // </label>
                    <Link to={`/shop?priceRange=${range.min}-${range.max}`}
                    id='priceRange'
                    key={range.label}
                    className={` shop-filter-link ${filtersState.priceRange === `${range.min}-${range.max}` ? 'shop-filter-link' : ''}`}
                    onClick={() => setFiltersState({...filtersState, priceRange: `${range.min}-${range.max}`})}
                    >{range.label}</Link>
                ))
            }
        </div>

        {/* clear filter */}

        <button onClick={clearFilters} className='btn'>Clear All Filter</button>

        
    </div>
  )
}

export default ShopFiltering