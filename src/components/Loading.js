import React from 'react'
import { memo } from 'react'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}

export default memo(Loading)