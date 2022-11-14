import { memo, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart } from 'chart.js/auto'

const Chart2 = () => {

    const { chart, topSongChart } = useSelector(state => state.app)
    const [data, setData] = useState(null)
    const options = {
        responsive: true,
        pointRadius: 0,
        aspectRatio: 4,
        scales: {
            y: {
                ticks: { display: false },
                grid: { borderDash: [1, 4], color: 'gray' }
            },
            x: {
                ticks: { color: 'blue' },
                grid: { color: 'transparent' }
            }
        },
        plugins: {
            legend: false
        }
    }
    // console.log({ chart, topSongChart });
    useEffect(() => {
        const labels = chart?.times?.filter(item => +item.hour % 2 === 0)?.map(item => item.hour)
        const datasets = []
        if (chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chart?.items[Object.keys(chart?.items)[i]]?.filter(i => +i.hour % 2 === 0)?.map(item => item.counter),
                    borderColor: i === 0 ? 'blue' : i === 1 ? 'yellow' : 'red',
                    tension: 0.2,
                    borderWidth: 2
                })
            }
            setData({ labels, datasets })
        }


    }, [chart])
    return (
        <div className='w-full px-[59px] mt-12 flex gap-8'>
            <div className='flex-1'>top rank</div>
            <div className='flex-4'>{data && <Line data={data} options={options} />}</div>
        </div>
    )
}

export default memo(Chart2)