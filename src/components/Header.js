import React from 'react'
import icons from '../ultis/icons'
import { Search } from './'

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons

const Header = () => {
    return (
        <div className='flex justify-between w-full items-center'>
            <div className='flex gap-6 w-full items-center'>
                <div className='flex gap-6 text-gray-400'>
                    <span><HiArrowNarrowLeft size={24} /></span>
                    <span><HiArrowNarrowRight size={24} /></span>
                </div>
                <div className='w-1/2'>
                    <Search />
                </div>
            </div>
            <div>
                Login
            </div>

        </div>
    )
}

export default Header