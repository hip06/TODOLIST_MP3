import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SidebarLeft, SidebarRight, Header, Loading } from '../../components'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useSelector } from 'react-redux';

const Public = () => {
    const [isShowRightSidebar, setIsShowRightSidebar] = useState(true)
    const { isLoading } = useSelector(state => state.app)
    return (
        <div className='w-full relative h-screen flex flex-col bg-main-300'>
            <div className='w-full h-full flex flex-auto'>
                <div className='w-[240px] h-full flex-none border border-blue-500'>
                    <SidebarLeft />
                </div>
                <div className='flex-auto relative flex flex-col border border-red-500'>
                    {isLoading && <div className='absolute top-0 bottom-0 z-20 left-0 right-0 bg-main-200 flex items-center justify-center'>
                        <Loading />
                    </div>}
                    <div className='h-[70px] flex-none px-[59px] flex items-center'>
                        <Header />
                    </div>
                    <div className='flex-auto w-full'>
                        <Scrollbars style={{ width: '100%', height: '100%' }}>
                            <Outlet />
                        </Scrollbars>
                    </div>
                </div>
                {isShowRightSidebar && <div className='w-[329px] hidden 1600:flex flex-none border border-green-500 animate-slide-left'>
                    <SidebarRight />
                </div>}
            </div>
            <div className='fixed z-50 bottom-0 left-0 right-0 h-[90px]'>
                <Player setIsShowRightSidebar={setIsShowRightSidebar} />
            </div>
        </div>
    )
}

export default Public