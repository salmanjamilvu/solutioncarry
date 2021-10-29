import React from 'react'
import { Typography, Input } from 'antd'

const { Title, Text } = Typography
const EmailNotifi = () => {
    return (
        <div className="p-3">
            <Title level={5} className="setting-title mb-2">Email Notifications</Title>
            <Text>All the emails will be sent to the below email address</Text>
            <Input value="salmanjamilvu@gmail.com" className="mt-2" disabled />
        </div>
    )
}

export default EmailNotifi
