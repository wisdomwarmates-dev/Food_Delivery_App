import React, { useContext } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { ShopContext } from '../ShopContext';
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";


const Cart = () => {

  const {cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, quantity, total} = useContext(ShopContext);


  return (
    <div className='max-w-4xl mx-auto px-6 mt-26 flex flex-col lg:flex-row gap-8'>
      <div className='lg:2/3 bg-white p-6'>
        <div className='flex justify-btween items-center border-b pb- 4'>
          <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
          <h1 className='text-lg'>Items: {quantity}</h1>
          <FaRegTrashAlt onClick={clearCart} className='text-red-500 text-2xl cursor-pointer'/>
                  </div>
                  <div className='grid-cols-4 text-gray-700 font-semibold mt-6 pb-2 '>
                    <span>Product</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                  </div>
                  <div>
                    {
                      cart.length > 0 ? (
                        cart.map((item) => {
                          const {id, image, name, price, amount} = item
                          return(
                            <div key={id} className='grid grid-cols-4 items-center py-4 border-b text-gray-700'>
                              <div className='flex items-center space-x-4'>
                              <img src={image} alt='' className='w-16 h-16 rounded-md object-cover'/>
                              <div>
                                <h3 className='font-semibold'>{name}</h3>
                                <button onClick={() => removeFromCart(id)} className='text-red-500 text-sm flex items-center gap-1 mt-2'><FaRegTrashAlt   />Remove</button>
                              </div>
                              </div>

                              <div className='flex items-center space-x-3'>
                                <button onClick={() => decreaseQuantity(id)} className='w-8 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xl'><IoMdRemoveCircleOutline /></button>
                                <span className='text-lg'>{amount}</span>
                                <button onClick={() => increaseQuantity(id)} className='w-8 h-6 bg-red-200 rounded-full flex items-center justify-center text-xl' ><IoAddCircleOutline /></button>
                                </div>
                                <p className='text-lg font-medium'>${price}</p> 
                                <p className='text-lg font-semibold'>${price * amount}</p>
                            </div>
                          
                          )
                        })
                      ) : (
                        <p className='text-gray-500 mt-4'>Your Cart is Empty</p>
                      )
                    }
                    </div>
      </div>

      {/* Right section */}
      <div className='lg:w-1/3 bg-gray-100 p-6 rounded-lg pb-4'>
        <h2 className='text-xl font-semibold border-b pb-4'>Cart Summary</h2>
        <div className='flex justify-between mt-2'>
          <span className='text-gray-700'>Items:</span>
          <span className='font-medium'>{quantity}</span>
        </div>
        <div className='flex justify-between mt-2'>
          <span className='text-gray-700'>Subtotal</span>
          <span className='font-medium'>${isNaN(total) ? 0 : total}</span>
        </div>
        <div className='flex justify-between mt-2'>
          <span className='text-gray-700'>Shipping Fee</span>
          <span className='font-medium'>Free</span>
        </div>

        <div className='flex justify-between mt-2'>
          <span className='text-gray-700'>Total Cost</span>
          <span className='font-medium'>${isNaN(total) ? 0 : total}</span>
        </div>
        <button className='w-full bg-green-500 text-white pu-3 mt-4 rounded text-lg'>CHECKOUT</button>
      </div>


    </div>
  )
}

export default Cart;
