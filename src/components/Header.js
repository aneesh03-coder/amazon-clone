import React from 'react'
import Image from 'next/image'
import {MenuIcon,SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header>
        {/* Top nav */}
            <div className='flex flex-wrap sm:flex-nowrap items-center bg-amazon_blue p-1 py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-shrink-0 sm:flex-grow-0 '>
                    <Image 
                        src='https://links.papareact.com/f90'
                        width={125}
                        height={35}
                        objectFit='contain'
                        className='cursor-pointer ' 
                    />
                </div>

           

            {/* Right Section */}
                <div className='text-white flex  items-center text-xs space-x-3  sm:mx-0 whitespace-nowrap  sm:order-last flex-shrink w-[44%]  sm:w-[35%] md:w-[39%] lg:w-[30%] xl:w-[24%] 2xl:w-[21%] 2xl:pl-8 md:ml-4 md:pl-4 justify-end pr-6'>
                    <div className='link'>
                        <p>Hello Aneesh Kalra</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>
                    <div className='link'>
                        <p>Return</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className='relative link flex items-center '>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                        <ShoppingCartIcon className='h-8' />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>

                {/* Custom Search */}

                <div className='bg-yellow-400  hover:bg-yellow-500  flex items-center h-9 rounded-md flex-grow cursor-pointer  sm:order-2 mx-3   md:ml-[70px]'>
                    <input className='p-2 flex-grow  h-full flex-shrink rounded-l-md focus:outline-none px-4 ' type="text" />
                    <SearchIcon className='h-12 p-4' />
                </div>
            </div>

        {/* Bottom Nav */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1'/>
                    All
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
