import React, { memo, useState, useEffect } from 'react'
import bgChart from '../assets/bg-chart.jpg'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'
import { useSelector } from 'react-redux'

const ChartSection = () => {

    const [data, setData] = useState(null)
    const { chart, rank } = useSelector(state => state.app)
    // console.log({ chart, rank });
    useEffect(() => {
        const labels = chart?.times?.filter(item => +item.hour % 2 === 0)?.map(item => item.hour)
        const datasets = []
        for (let i = 0; i < 3; i++) {
            datasets.push({
                data: chart?.items[Object.keys(chart?.items)[i]]?.filter(item => +item.hour % 2 === 0)?.map(item => item.counter)
            })
        }
        setData({ labels, datasets })
    }, [chart])
    return (
        <div className='px-[59px] mt-12 relative'>
            <img src={bgChart} alt="bg-chart" className='w-full object-cover rounded-md max-h-[300px]' />
            <div className='absolute top-0 z-10 left-[59px] bg-[rgba(77,34,104,0.9)] right-[59px] bottom-0'></div>
            <div className='absolute top-0 z-20 left-[59px] right-[59px] bottom-0 p-5'>
                <h3 className='text-2xl text-white font-bold'>#zingchart</h3>
                <div className='flex gap-4'>
                    <div className='flex-4 border border-white'>rank</div>
                    <div className='flex-6 border border-white'>
                        <Line data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ChartSection)