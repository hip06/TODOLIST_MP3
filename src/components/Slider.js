import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getArrSlider } from '../ultis/fn'

const Slider = () => {

    const { banner } = useSelector(state => state.app)

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item')
        let min = 1
        let max = 3
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1)

            for (let i = 0; i < sliderEls.length; i++) {
                sliderEls[i].classList.remove('animate-slide-right', 'order-last', 'z-10')
                sliderEls[i].classList.remove('animate-slide-left', 'order-first', 'z-0')
                sliderEls[i].classList.remove('animate-slide-left2', 'order-2', 'z-0')

                if (list.some(item => item === i)) {
                    sliderEls[i].style.cssText = `display: block`
                } else {
                    sliderEls[i].style.cssText = `display: none`
                }
            }
            list.forEach((item) => {
                if (item === max) {
                    sliderEls[max].classList.add('animate-slide-right', 'order-last', 'z-10')
                } else if (item === min) {
                    sliderEls[min].classList.add('animate-slide-left', 'order-first', 'z-0')
                } else {
                    sliderEls[item].classList.add('animate-slide-left2', 'order-2', 'z-0')
                }
            })
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
        }, 3000)
        return () => {
            intervalId && clearInterval(intervalId)
        }
    }, [])

    return (
        <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8'>
            {banner?.map((item, index) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    className={`slider-item flex-1 object-contain w-1/3 rounded-lg ${index <= 2 ? 'block' : 'hidden'}`}
                />
            ))}
        </div>
    )
}

export default Slider