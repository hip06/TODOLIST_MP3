import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Section = () => {

    const { friday } = useSelector(state => state.app)
    const navigate = useNavigate()
    // console.log(friday)
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold'>{friday?.title}</h3>
                <span className='text-xs'>TẤT CẢ</span>
            </div>
            <div className='flex items-center justify-between gap-[28px]'>
                {friday && friday?.items?.length > 0 && friday.items.map(item => (
                    <div
                        key={item.encodeId}
                        onClick={() => {
                            navigate(item?.link?.split('.')[0])
                        }}
                        className='flex flex-col gap-3 flex-auto w-1/5 text-sm cursor-pointer'
                    >
                        <img src={item.thumbnailM} alt="avatar" className='w-full h-auto rounded-lg' />
                        <span className='flex flex-col'>
                            <span className='font-semibold'>{item.title}</span>
                            <span>{`${item.sortDescription?.slice(0, 40)}...`}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Section)