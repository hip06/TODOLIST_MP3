import React, { useEffect } from 'react'
import { Slider, Section } from '../../components'
import { useSelector } from 'react-redux'
const Home = () => {
    const { friday, newEveryday, top100, xone, newMusic } = useSelector(state => state.app)


    return (
        <div className='overflow-y-auto w-full'>
            <Slider />
            <Section data={friday} />
            <Section data={newEveryday} />
            <Section data={top100} />
            <Section data={xone} />
            <Section data={newMusic} />
            <div className='w-full h-[500px]'></div>
        </div>
    )
}

export default Home