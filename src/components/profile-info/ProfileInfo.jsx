import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'
import { Typography, Input, Form, Row, Col, Button, Upload, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select
const { Title } = Typography
const { TextArea } = Input
const ProfileInfo = () => {

    const handleImageUrl = (e) =>{
        if(e.file.length !== 0){
            
            console.log(e.file)
        }
    }
    const options = useMemo(() => countryList().getData(), [])
    return (
        <div className="p-3">
            <Title level={5} className="setting-title mb-3">Your Details</Title>
            <Form>
                <Row gutter={16}>
                    <Col span={12} lg={12} md={12} sm={24} xs={24}>
                        <Input placeholder="First Name" />
                    </Col>
                    <Col span={12} lg={12} md={12} sm={24} xs={24}>
                        <Input placeholder="Last Name" />
                    </Col>
                </Row>
                <Input placeholder="Add your Tagline Here" className="mt-2" />
                <TextArea placeholder="Description" rows={10} className="mt-2" allowClear />
                <Title level={5} className="setting-title mt-2">Profile Photo</Title>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="mt-2"
                    action="http://localhost:3000/profile"
                    onChange={handleImageUrl}
                    maxCount={1}
                >
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                </Upload>
                <Title level={5} className="setting-title mt-2">Your Location</Title>
                <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="SELECT LOCATION"
                    optionFilterProp="children"
                    className="mt-2"
                >
                    {options.map( (opt, key) => (
                        <Option key={key} value={opt.label}>{opt.label}</Option>
                    ))} 
                    <Option value="tom">Tom</Option>
                </Select>
                <Input placeholder="Your Address" className="mt-2" />
                <Button type="primary" className="mt-2">Save & Update</Button>
            </Form>
        </div>
    )
}

export default ProfileInfo
