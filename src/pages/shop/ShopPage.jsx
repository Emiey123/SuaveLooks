import React, { useEffect, useState } from 'react'
import Categories from '../home/Categories'
import productsData from '../../data/products.json'
import ProductCards from './ProductCards'
import ShopFiltering from './shopFiltering'

const filters = {
    categories:['all', 'clothing', 'shoes', 'accessories', 'sunglasses', 'hat', 'socks'],
    colors:['all', 'red', 'blue', 'black', 'white', 'green', 'grey', 'gold', 'yellow', 'light brown', 'brown', 'silver', 'cream', 
        'white & brown', 'pink', 'white & black', 'black & gold', 'camouflague', 'ivory & black', 'brown & black'
    ],
    brands:['all', 'ADIDAS', 'ASICS', 'AMIRI', 'BALENCIAGA', 'BURBERRY', 'CHANEL', 'GUCCI', 'VISVIM', 'WACKO', 'WHITESPACE', 
        'ZANKOV', 'VALENTINO', 'TOM FORD', 'THE ROW', 'SNOW SNEAK', 'SKIMS', 'SHINOLA', 'SAINT LAURENT', 'SAMUEL ZELIG', 'SALOMON',
        'RHUDE', 'RAY-BAN', 'RAG & BONE', 'RALPH LAUREN', 'ON', 'OLIVER PEOPLES', 'OAKLEY', 'NILI LOTAN', 'NAHMIAS', 'MONCLER', 
        'MAISON MARGIELA', 'MESSY WEEKEND', 'MARTINE ALLI', 'MAPLE', 'MAD PARIS', 'HOMME PLISSE ISSEY MIYAKE', 'KARDO', 'GUIDI', 'GIVENCHY',
        'CARTIER', 'ROLEX', 'EMANUELE BICOCCHI', 'DISTRICT VISION', 'DIESEL', 'SONG FOR THE MUTE', 'D1 MILANO', 'CHIMI', 'CDLP', 
        'CALVIN KLEIN', 'BY PARRA', 'BOTTEGA VENETA', 'BLEUE BURNHAM', 'BEAMS', 'BASKETCASE'
    ],
    priceRange:[
        {
            label: 'Under NGN 10,000',
            min: 0,
            max: 10000
        },
        {
            label: 'NGN 10,000- NGN 50,000',
            min: 10000,
            max: 50000
        },
        {
            label: 'NGN 50,000-200,000',
            min: 50000,
            max: 200000
        },
        {
            label: 'NGN 200,000-500,000',
            min: 200000,
            max: 500000
        },
        {
            label: 'NGN 500,000 and above',
            min: 500000,
            max: Infinity
        }
    ]
}

const ShopPage = () => {
    const[products, setProducts] =useState([])
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        brand : 'all',
        priceRange: ''
    })

    // filtering function
    const applyFilters = ()=> {
        let filteredProducts = productsData
        
        //filter by category
        if(filtersState.category && filtersState.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category)
        }

        //filter by colors
        if(filtersState.color && filtersState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filtersState.color)
        }

        //filter by brand
        if(filtersState.brand && filtersState.brand !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.brand === filtersState.brand)
        }

        //filter by priceRange
        if(filtersState.priceRange){
            const [minPrice, maxPrice] = filtersState.priceRange.split('-').map(Number)
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
        }

        setProducts(filteredProducts)
    }

    useEffect(() => {
        applyFilters()
    }, [filtersState])

    //clear filters

    const clearFilters = () =>{
        setFiltersState({
            category: 'all',
            color: 'all',
            brand : 'all',
            priceRange: ''
        })
    }

  return (
    <>
    <section className='section__container bg-primary-light'>
        <h2 className='section__header'>Shop Page</h2>
        <p className='section__subheader'>Shop the latest trend in men's fashion. Quality fabrics, modern fits, and effortles style all in one place
        </p>
    </section>

    <section className='section__container'>
        <div className="shop-page">
            {/* left side */}
            <div className="shoppage-filter">
                <ShopFiltering 
                    filters={filters} 
                    filtersState={filtersState} 
                    setFiltersState={setFiltersState}
                    clearFilters={clearFilters}
                />
            </div>

            {/* right side */}
            <div>
                <h3 className="text-xl font-medium mb-4  md:flex-row md:gap-12 gap-8">Available Product {products.length}</h3>
                <ProductCards products={products}/>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShopPage