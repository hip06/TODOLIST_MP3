import React from 'react'
import { memo } from 'react'
import moment from 'moment'
import 'moment/locale/vi'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

const SongItem = ({ thumbnail, title, artists, sid, releaseDate, order, percent, style }) => {

    const dispatch = useDispatch()
    return (
        <div
            onClick={() => {
                dispatch(actions.setCurSongId(sid))
                dispatch(actions.play(true))
            }}
            className={`w-full flex p-[10px] gap-[10px] justify-between items-center rounded-md cursor-pointer ${style || 'text-black hover:bg-main-200'}`}
        >
            <div className='flex gap-4'>
                {order && <span className={`${order === 1 ? 'text-shadow' : ''} text-[rgba(77,34,104,0.9)] text-[32px] m-auto`}>{order}</span>}
                <img src={thumbnail} alt="thumbnail" className='w-[60px] h-[60px] object-cover rounded-md' />
                <div className='flex flex-col'>
                    <span className='text-sm font-semibold'>{title}</span>
                    <span className='text-xs opacity-70'>{artists}</span>
                    {releaseDate && <span className={`text-xs opacity-70`}>{moment(releaseDate * 1000).fromNow()}</span>}
                </div>
            </div>
            {percent && <span>{`${percent}%`}</span>}
        </div>
    )
}

export default memo(SongItem)