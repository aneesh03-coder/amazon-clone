import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket,removeFromBasket } from '../slices/basketSlice'
const CheckoutProduct = ({id,title,price,rating,description,category,image,hasPrime}) => {
    const dispatch=useDispatch()

    const addItemToBasket=()=>{
        const product={id,title,price,rating,description,category,image,hasPrime}
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket=()=>{
        dispatch(removeFromBasket({id}))
    }


    return (
        <div className='grid grid-cols-5'>
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit='contain'
              
            />
            {/* Middle Section */}
            <div className='col-span-4 sm:col-span-3 mx-5'>
                <p className='font-bold text-xs sm:text-lg'>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon key={i} className='h-4 sm:h-5 text-yellow-500'/>
                    ))}
                </div>
                <p className='text-xs sm:mt-2 sm:mb-2 line-clamp-1 sm:line-clamp-3'>{description}</p>
                <Currency quantity={price*100} currency='INR'/>

                {hasPrime && (
                    <div className='flex items-center space-x-2 h-11'>
                        <img src="https://links.papareact.com/fdw" className='w-12' 
                        loading='lazy' />
                        <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                    </div>
                )}
            
            </div>
            <div className={'flex col-span-5  sm:col-span-1 sm:flex-col sm:space-y-2 sm:my-auto justify-center sm:justify-self-end sm:mr-2 mt-2 sm:mt-5 ' + (!hasPrime && 'mt-4') } >
                    
                <button className='button mt-auto m-3 w-[180px] sm:w-full' onClick={addItemToBasket}>Add to Basket</button>
                <button className='button mt-auto m-3 w-[180px] sm:w-full' onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
