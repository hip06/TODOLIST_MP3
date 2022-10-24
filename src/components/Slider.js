import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Slider = () => {

    const { banner } = useSelector(state => state.app)

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item')
        for (let i = 0; i < sliderEls.length; i++) {
            if (i < 3) {
                sliderEls[i].style.cssText = `display: none`
            } else {

            }
        }
    }, [])

    return (
        <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8'>
            {banner?.map(item => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    className='slider-item flex-1 object-contain w-1/3 rounded-lg'
                />
            ))}
        </div>
    )
}

export default Slider