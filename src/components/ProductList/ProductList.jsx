import React from 'react'
import  { useContext } from 'react';
import { ShopContext } from '../ShopContext';
import { Link } from 'react-router-dom'

const ProductList = () => {
const {products, addToCart} = useContext(ShopContext)

  return (
    <div className='w-300 mx-auto px-6 text-center gap-4 mt-20'>
      <h2 className='text-3xl font-semibold mb-8 text-gray-800 w-100 ml-93 underline uppercase'>Our Awesome Dishes</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {products.map((product) => {
        const {id, image, name, price,} = product
        return (
          <div key={id} className='bg-white border border-gray-200 rounded-lg p-4 shadow-md transition-transform duration-200 hover:-translate-y-1'>
           <Link to={`/product/${id}`}>
           <img src={image} alt="" className='h-64 w-full object-contain rounded-lg transition-transform duration-200'/>
           </Link>
            <div className='mt-4'>
            <h4 className='text-xl font-semibold text-gray-900'>{name}</h4>
            <p className='text-gray-600'>$ {price}</p>
            <div>
              <button onClick={() => addToCart(product, id)} className='w-full py-2 mt-4 text-lg font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 transition duration-300'>Add to Cart</button>
            </div>
            </div>
          </div>
        )
      })}
    </div>

    </div>
  )
}

export default ProductList;
