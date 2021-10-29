import React, { useState } from 'react'
import { Row, Col, Typography, Form, Input, Button, Checkbox, Carousel, Select } from 'antd'
import './signup.css'
import NavBar from '../../components/navbar/NavBar'
import slide1 from '../../images/login-bg.jpg'
import slide2 from '../../images/login-bg1.jpg'
import slide3 from '../../images/login-bg2.jpg'

const { Title, Link } = Typography
const { Option } = Select
const Signup = () => {
    const [form] = Form.useForm()
    const [value, setValue] = useState({
        email : '',
        password : '',
        user_type : '',
    })
    const onFinish = (values) => {
        console.log('Success:', values);
        form.resetFields()
        
    };
    
    return (
        <React.Fragment>
            <NavBar />
            <div className="signup">
               <Row className="card">
                    <Col span={12} lg={12} md={24} sm={24} xs={24} className="slider-container">
                    <Carousel autoplay dotPosition='left'>
                        <div className="slider">
                            <img src={slide1} alt="slide1" />
                        </div>
                        <div className="slider">
                            <img src={slide2} alt="slide1" />
                        </div>
                        <div className="slider">
                            <img src={slide3} alt="slide1" />
                        </div>
                    </Carousel>
                    </Col>
                    <Col span={12} lg={12} md={24} sm={24} xs={24} className="form-container">
                        <Title className="text-center font-weight-bold">Register</Title>
                        <Form
                            className="mt-3"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            onFinish={onFinish}
                            form={form}
                        >
                            <Form.Item
                                name="email"
                                hasFeedback
                                rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                            >
                                <Input placeholder="Enter Email" onChange={(e)=> setValue({...value ,email : e.target.value})} />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                hasFeedback
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password minLength={8} maxLength={12} placeholder="Password" onChange={(e)=> setValue({...value ,password : e.target.value})} />
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                          if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                          }
                                          return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="Confirm Password" />
                            </Form.Item>
                            <Form.Item
                                name="user_type"
                                hasFeedback
                                rules={[{ required: true, message: 'Please Select User Type!' }]}
                            >
                                <Select
                                    placeholder="Please Select User Type"
                                    allowClear
                                    style={{ width: '100%' }}
                                    onChange={(e)=> setValue({...value ,user_type : e})}
                                >
                                    <Option value="expert">Expert (Signup As Expert)</Option>
                                    <Option value="Student">Student (Signup As Student)</Option>
                                </Select>
                            </Form.Item>
                            <Checkbox required className="mb-2">By Registering You Confirm That You Accept <Link href="#">Terms & Conditions</Link> And <Link href="#">Privacy Policy</Link></Checkbox>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
               </Row>
            </div>
        </React.Fragment>
    )
}

export default Signup
