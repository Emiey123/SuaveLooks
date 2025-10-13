import React, { useState } from 'react'
import productsData from '../../data/products.json'
import ProductCards from '../shop/ProductCards'

const Search = (query) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredProducts, setFilteredProducts] =useState(productsData)

    const handleSearch = () => {
        const query = searchQuery.toLowerCase()

        const filtered = productsData.filter(product => product.name.toLowerCase().includes
        (query) || product.category.toLowerCase().includes(query))

        setFilteredProducts(filtered)
    }
  return (
    <>
    <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Search Product</h2>
        <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque! Id at optio quasi quod.</p>
    </section>

    <section className='section__container'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center gap-4'>
            <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-bar w-full max-w-4xl p-2 border rounded'
            placeholder='Search for products...' 
            />
            <button
            onClick={handleSearch}
            className='search-button w-full md:w-auto py-2 px-8 bg-primary'>Search</button>
        </div>

        <ProductCards products={filteredProducts} />
    </section>
    </>
  )
}

export default Search