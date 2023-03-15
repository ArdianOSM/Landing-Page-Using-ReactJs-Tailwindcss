import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full  bg-white py-24 px-12 '>
        <div className='max-w-[800px] grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, distinctio accusamus dicta architecto itaque cupiditate cumque exercitationem enim nostrum at eum atque, quia rerum! Mollitia neque deleniti dolorem delectus autem?</p>
                <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics