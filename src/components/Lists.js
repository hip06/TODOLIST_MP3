import React, { memo } from 'react'
import { List } from './'
import icons from '../ultis/icons'
import moment from 'moment'


const { BsDot } = icons


const Lists = ({ songs, totalDuration }) => {

    // console.log({ songs, totalDuration })
    return (
        <div className='w-full flex flex-col text-xs text-gray-600'>
            <div className=' flex justify-between items-center p-[10px] font-semibold'>
                <span>BÀI HÁT</span>
                <span>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <div className='flex flex-col'>
                {songs?.map(item => (
                    <List key={item.encodeId} songData={item} />
                ))}
            </div>
            <span className='flex items-center gap-1 py-[10px] border-t border-[rgba(0,0,0,0.05)]'>
                <span>{`${songs?.length} bài hát`}</span>
                <BsDot size={24} />
                <span>{moment.utc(totalDuration * 1000).format('HH:mm:ss')}</span>
            </span>
        </div>
    )
}

export default memo(Lists)