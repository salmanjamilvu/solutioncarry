import React, { useState } from 'react'
import { Row, Col, Typography, Form, Input, Button, Checkbox } from 'antd'
import './login.css'
import NavBar from '../../components/navbar/NavBar'
import logo from '../../images/logo.png'

const { Title, Text, Link } = Typography
const Login = () => {
    const [form] = Form.useForm()
    const [value, setValue] = useState({
        email : '',
        password : '',
    })
    const onFinish = (values) => {
        console.log('Success:', values);
        form.resetFields()
    };
    return (
        <React.Fragment>
            <NavBar />
            <div className="login">
                <Row className="login-card">
                    <Col span={12} lg={12} md={24} sm={24} xs={24} className="text-container">
                        <img src={logo} alt="logo" />
                        <Title className="title">Welcome to Solutioncarry.com</Title>
                        <Text className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Text>
                    </Col>
                    <Col span={12} lg={12} md={24} sm={24} xs={24} className="log-form-container">
                        <Title className="form-title">Login</Title>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
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
                            <Checkbox required className="mb-2">Remember me</Checkbox>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className="mt-2">
                            <Text>New Users? <Link href="#">SignUp</Link></Text>
                            <Link className="float-right" href="#"> Forget your password </Link>
                        </div>
                    </Col>    
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Login
