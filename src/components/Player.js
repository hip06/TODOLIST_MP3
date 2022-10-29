import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as apis from '../apis'
import icons from '../ultis/icons'

const { AiOutlineHeart, AiFillHeart, BsThreeDots, MdSkipNext, MdSkipPrevious, CiRepeat, BsPauseFill, BsFillPlayFill, CiShuffle } = icons

const Player = () => {
    const audioEl = new Audio('https://mp3-s1-m-zmp3.zmdcdn.me/f46c9b2792677b392276/9094281577763410628?authen=exp=1667134635~acl=/f46c9b2792677b392276/*~hmac=972acda7d0ec6b777a75dc6c368eb130')
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)
    console.log(audioEl)

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.getDetailSong(curSongId),
                apis.getSong(curSongId)
            ])
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }
            if (res2.data.err === 0) {
                setSource(res2.data.data['128'])
            }
        }

        fetchDetailSong()
    }, [curSongId])

    useEffect(() => {
        audioEl.play()

    }, [curSongId])

    const handleTogglePlayMusic = () => {
    }


    return (
        <div className='bg-main-400 px-5 h-full flex'>
            <div className='w-[30%] flex-auto flex gap-3 items-center'>
                <img src={songInfo?.thumbnail} alt="thumbnail" className='w-16 h-16 object-cover rounded-md' />
                <div className='flex flex-col'>
                    <span className='font-semibold text-gray-700 text-sm'>{songInfo?.title}</span>
                    <span className='text-xs text-gray-500'>{songInfo?.artistsNames}</span>
                </div>
                <div className='flex gap-4 pl-2'>
                    <span>
                        <AiOutlineHeart size={16} />
                    </span>
                    <span>
                        <BsThreeDots size={16} />
                    </span>
                </div>
            </div>
            <div className='w-[40%] flex-auto border flex items-center justify-center gap-2 flex-col border-red-500 py-2'>
                <div className='flex gap-8 justify-center items-center'>
                    <span className='cursor-pointer' title='Bật phát ngẫu nhiên'><CiShuffle size={24} /></span>
                    <span className='cursor-pointer'><MdSkipPrevious size={24} /></span>
                    <span
                        className='p-1 border border-gray-700 cursor-pointer hover:text-main-500 rounded-full'
                        onClick={handleTogglePlayMusic}
                    >
                        {isPlaying ? <BsPauseFill size={30} /> : <BsFillPlayFill size={30} />}
                    </span>
                    <span className='cursor-pointer'><MdSkipNext size={24} /></span>
                    <span className='cursor-pointer' title='Bật phát lại tất cả'><CiRepeat size={24} /></span>

                </div>
                <div>
                    progress bar
                </div>
            </div>
            <div className='w-[30%] flex-auto border border-red-500'>
                Volume
            </div>
        </div>
    )
}

export default Player