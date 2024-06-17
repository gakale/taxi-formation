'use client'
import { useState } from 'react'
import Car01 from '../../public/car-01.png'
import Car02 from '../../public/car-02.png'
import Car03 from '../../public/car-03.png'
import Car04 from '../../public/car-04.png'

import Image from 'next/image'

export default function CarOptions() {
  const [activeIndex, setActiveIndex] = useState()
  const options =
  [
    {
    name: 'Toyota',
    image: Car01,
    price: 100,
  },
  {
    name: 'Mercedes',
    image: Car02,
    price: 200,
  },
  {
    name: 'BMW',
    image: Car03,
      price: 300,
    },
    {
      name: 'Mercedes',
      image: Car04,
      price: 200,
    }
  ]
  return (
    <div className='grid grid-cols-2 lg:grid xl-grid-cols-4 gap-2'>
          {options.map((item,index)=>(
            <div key={index} className={`border border-gray-200 rounded-md p-2 flex
             items-center justify-center gap-1 cursor-pointer hover:bg-yellow-400 
             hover:scale-110 transition-all  ${activeIndex === index ? 'bg-yellow-400 border-[2px]' : null}`}
             onClick={()=> setActiveIndex(index)}>
              <Image src={item.image} alt={item.name} width={100} height={100} />
              <p className='text-sm font-bold'>{item.name}</p>
              <p className='text-sm font-bold'>{item.price}</p>
            </div>
          ))}
    </div>
  )
}