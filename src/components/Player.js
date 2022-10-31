import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as apis from '../apis'
import icons from '../ultis/icons'
import * as actions from '../store/actions'
import { toast } from 'react-toastify'

const { AiOutlineHeart, AiFillHeart, BsThreeDots, MdSkipNext, MdSkipPrevious, CiRepeat, BsPauseFill, BsFillPlayFill, CiShuffle } = icons

const Player = () => {
    const audioEl = useRef(new Audio())
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)
    const thumbRef = useRef()
    const trackRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId)
            ])
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }
            if (res2.data.err === 0) {
                setSource(res2.data.data['128'])
            } else {
                dispatch(actions.play(false))
                audioEl.current.src = undefined
                audioEl.current.pause()
                toast.info(res2.data.msg)
            }
        }

        fetchDetailSong()
    }, [curSongId])
    // console.log({ curSongId, source });
    const play = async () => {
        await audioEl.current.play()
    }

    useEffect(() => {
        audioEl.current.pause()
        audioEl.current.src = source
        audioEl.current.load()
        if (isPlaying) play()
    }, [curSongId, source])

    const handleTogglePlayMusic = async () => {
        if (isPlaying) {
            audioEl.current.pause()
            dispatch(actions.play(false))
        } else {
            play()
            dispatch(actions.play(true))
            // window.requestAnimationFrame(handleAnimationProgressBar)
        }
    }
    useEffect(() => {
        console.log(audioEl.current.currentTime)
        if (isPlaying && thumbRef.current) {
            let percent = Math.round(audioEl.current.currentTime * 100 / songInfo.duration)
            thumbRef.current.cssText = `right: ${percent}%`
        }
    }, [audioEl.current.currentTime])

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
            <div className='w-[40%] flex-auto border flex items-center justify-center gap-4 flex-col border-red-500 py-2'>
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
                <div className='w-full'>
                    <div ref={trackRef} className='bg-[rgba(0,0,0,0.1)] relative m-auto h-[3px] w-4/5 rounded-l-full rounded-r-full'>
                        <div ref={thumbRef} className='bg-[#0e8080] absolute top-0 left-0 h-[3px] rounded-l-full rounded-r-full'></div>
                    </div>

                </div>
            </div>
            <div className='w-[30%] flex-auto border border-red-500'>
                Volume
            </div>
        </div>
    )
}

export default Player