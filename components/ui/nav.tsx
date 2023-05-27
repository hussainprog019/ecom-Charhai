import React from 'react'
import { ShoppingCartIcon } from "lucide-react"
import Image from 'next/image'
import Logo from '../../public/logo.png'


export default function Nav() {
    return (
        <div className=' flex justify-evenly bg-slate-400/50  h-20 sticky top-0 w-full'>
        <div className='flex items-center'>
                <Image src={Logo} alt='logo' className='h-20 w-24'/>
            
            <p className='font-extrabold text-lg'>CHARHAI</p> 
            </div>
            <div className='flex space-x-40 items-center font-semibold'>
                <div className='flex gap-x-5 text-lg'>
                    <button >Home</button>
                    <button >Categories</button>
                    <button >About Us</button>
                    <button >Contact Us</button>
                </div>
                <div>
                    <button><ShoppingCartIcon className=" h-10 w-10" /></button>

                </div>
            </div>


        </div>
    )
}
