import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
import moment from 'moment'
import { Lists } from '../../components'
import { Scrollbars } from 'react-custom-scrollbars-2';

const Album = () => {

    const { pid } = useParams()
    const [playlistData, setPlaylistData] = useState({})

    useEffect(() => {
        const fetchDetailPlaylist = async () => {
            const response = await apis.apiGetDetaiPlaylist(pid)
            if (response?.data.err === 0) {
                setPlaylistData(response.data?.data)
            }
        }

        fetchDetailPlaylist()
    }, [pid])

    return (
        <div className='flex gap-8 w-full h-full px-[59px]'>
            <div className='flex-none w-1/4 border border-red-500 flex flex-col items-center gap-2'>
                <img src={playlistData?.thumbnailM} alt="thumbnail" className='w-full object-contain rounded-md shadow-md' />
                <div className='flex flex-col items-center gap-1'>
                    <h3 className='text-[20px] font-bold text-gray-800'>{playlistData?.title}</h3>
                    <span className='flex gap-2 items-center text-gray-500 text-xs'>
                        <span>Cập nhật:</span>
                        <span>{moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YYYY")}</span>
                    </span>
                    <span className='flex gap-2 items-center text-gray-500 text-xs'>{playlistData?.artistsNames}</span>
                    <span className='flex gap-2 items-center text-gray-500 text-xs'>{`${Math.round(playlistData?.like / 1000)}K người yêu thích`}</span>
                </div>
            </div>
            <Scrollbars style={{ width: '100%', height: '80%' }}>
                <div className='flex-auto mb-40'>
                    <span className='text-sm'>
                        <span className='text-gray-600'>Lời tựa </span>
                        <span>{playlistData?.sortDescription}</span>
                    </span>
                    <Lists songs={playlistData?.song?.items} totalDuration={playlistData?.song?.totalDuration} />
                </div>
            </Scrollbars>
        </div>
    )
}

export default Album