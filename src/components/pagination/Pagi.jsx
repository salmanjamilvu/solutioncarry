import React from 'react'
import { Pagination } from 'antd'
import './pagination.css'

const Pagi = () => {
    return (
        <Pagination className="pagination" defaultCurrent={1} total={50} />
    )
}

export default Pagi
