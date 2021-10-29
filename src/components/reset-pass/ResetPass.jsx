import React from 'react'
import { Typography, Input, Form, Row, Col, Button } from 'antd'

const { Title } = Typography
const ResetPass = () => {
    return (
        <div className="p-3">
            <Title level={5} className="setting-title mb-3">Reset Password</Title>
            <Form>
                <Row gutter={16}>
                    <Col span={12} lg={12} md={12} sm={24} xs={24}>
                        <Input.Password placeholder="Old Password" />
                    </Col>
                    <Col span={12} lg={12} md={12} sm={24} xs={24}>
                        <Input.Password placeholder="New Password" />
                    </Col>
                </Row>
                <Input.Password placeholder="Retype Password" className="mt-2" />
                <Button type="primary" className="mt-2">SAVE</Button>
            </Form>
        </div>
    )
}

export default ResetPass
