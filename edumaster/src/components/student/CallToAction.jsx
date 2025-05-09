import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold '>Learn Anything, Anytime, Anywhere</h1>
      <p className=' texxt-gra-500 sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus quaerat repudiandae,  non ratione maiores cum sed maxime laudantium eius <br />cupiditate officia porro pariatur veniam enim magni quibusdam ea? Ducimus!</p>
      <div className='felx items-center gap-6 mt-4 font-medium'>
        <button className='px-10 py-3 roundend-md text-white bg-blue-600'>Get Started</button>
        <button className='flex items center gap 2'>Learn More <img src={assets.arrow_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default CallToAction
