import React from 'react'
import { Typography, Input, Form, Row, Col, Select, Button } from 'antd'

const { Title } = Typography
const { Option } = Select;
const { TextArea } = Input
const DeleteAccount = () => {
    return (
        <div className="p-3">
            <Title level={5} className="setting-title mb-3">Delete Account</Title>
            <Form>
                <Row gutter={16}>
                    <Col span={12} lg={12} md={12} sm={24} xs={24}>
                        <Input.Password placeholder="Password" />
                    </Col>
                    <Col span={12} lg={12} md={12} sm={24} xs={24}>
                        <Input.Password placeholder="Retype Password" />
                    </Col>
                </Row>
                <Select placeholder="SELECT REASON" className="mt-2" style={{ width: "100%" }}>
                    <Option value="not_satisfied">No satisfied with the system</Option>
                    <Option value="not_good_support">Support is not good</Option>
                    <Option value="Others">Others</Option>
                </Select>
                <TextArea placeholder="Description (Optional)" rows={10} className="mt-2" allowClear />
                <Button type="primary" className="mt-2">DELETE ACCOUNT</Button>
            </Form>
        </div>
    )
}

export default DeleteAccount
