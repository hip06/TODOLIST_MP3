import React, { useEffect } from 'react'
import { Header, Slider } from '../../components'

const Home = () => {


    return (
        <div className='overflow-y-auto w-full'>
            <div className='h-[70px] px-[59px] flex items-center'>
                <Header />
            </div>
            <Slider />
        </div>
    )
}

export default Home