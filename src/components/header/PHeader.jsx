import React from 'react'
import { Input, Typography } from 'antd'
import './Pheader.css'

const { Title } = Typography
const PHeader = () => {
    return (
        <div className="page-header">
            <Title level={1}>h5. Ant Design</Title>
            <Title level={5}>h5. Ant Design</Title>
            <div style={{ width: '50%' }}>
                <Input.Search size="large" placeholder="input here" />
            </div>
        </div>
    )
}

export default PHeader
