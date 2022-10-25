import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getArrSlider } from '../ultis/fn'

const Slider = () => {

    const { banner } = useSelector(state => state.app)

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item')
        let min = 0
        let max = 2
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1)
            for (let i = 0; i < sliderEls.length; i++) {
                if (list.some(item => item === i)) {
                    sliderEls[i].style.cssText = `display: block`
                } else {
                    sliderEls[i].style.cssText = `display: none`
                }
            }
            if (min === sliderEls.length - 1) {
                min = 0
            } else {
                min += 1
            }
            if (max === sliderEls.length - 1) {
                max = 0
            } else {
                max += 1
            }
            console.log(list)
        }, 1000)
        return () => {
            intervalId && clearInterval(intervalId)
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