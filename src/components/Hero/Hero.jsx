import React from 'react'
import chicken1 from '../../assets/chicken1.png'
import pizza from '../../assets/pizza.jpeg'
import chicken3 from '../../assets/chicken3.jpeg'

const Hero = () => {

  return (
    <div className='hero h-screen flex flex-column items-center'>
      <div className='flex justify-between items-center gap-4 w-full max-w-screen mt-16'>
        <div className='flex ml-18'>
          <img src={chicken1} alt="" className='w-[600px] h-[480px] object-cover ml-12 mt-18 rounded-[50%] border-8 border-white' />
          <img src={pizza} alt=""  className='w-[400px] h-[400px] object-cover -ml-5 mt-36 rounded-[50%] border-8 border-white' />
          <img src={chicken3} alt=""  className='w-[400px] h-[300px] object-cover -ml-5 mt-56 rounded-[50%] border-8 border-white' />
        </div>
        <div>
          <h1 className='text-6xl font-bold py-0 text-white -mt-70 leading-tight'>DELICIOUS MEAL</h1>
          <p className='text-sm font-semibold w-2xl mt-1 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia blanditiis fugiat earum consequatur! Amet nam facilis sed dicta vero necessitatibus ullam quam molestiae dolor ipsa quo error possimus, tenetur maiores.</p>
        </div>

      </div>
    </div>
  )
}

export default Hero
