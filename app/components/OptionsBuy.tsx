'use client'
import { useState } from 'react'
import Visa from '../../public/visa.png'
import GooglePay from '../../public/google-pay.png'
import ApplePay from '../../public/apple-pay.png'
import Image from 'next/image'

export default function OptionsBuy() {

  const [activeIndex, setActiveIndex] = useState<any>()
  const items = [
    {
      name: 'Visa',
      image: Visa,
    },
    {
      name: 'Google Pay',
      image: GooglePay,
    },
    {
      name: 'Apple Pay',
      image: ApplePay,
    },
  ]
  return (
    <div>
        <h2 className='text-[14px] font-meduim my-4 mb-2'>Payment</h2>
        <div className='flex items-center gap-2 mt-2 pl-2'>
            {items.map((item, index) => (
                <div key={index} className={`w-[50px] mb-1 boder flex items-center justify-center rounded-md cursor-pointer
                  hover:border-yellow-400 hover:scale-110 transition-all ${activeIndex === index ? 'border-yellow-400 border-[2px]' : null}
                `}
                onClick={() => setActiveIndex(index)}
                >
                    <Image src={item.image} alt={item.name} width={100} height={1000} />
                </div>
            ))}
        </div>
    </div>
  )
}