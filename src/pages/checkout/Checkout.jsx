import React, { useState } from 'react'
import { Button, Divider, Typography, Row, Col, Radio, Input } from 'antd'
import './checkout.css'
import NavBar from '../../components/navbar/NavBar'
import PayPal_logo from '../../images/paypal.png'
import card_logo from '../../images/card.png'

const { Title, Text } = Typography
const Checkout = () => {
    const [value, setvalue] = useState('')
    const handlevalue = (e) =>{
        setvalue(e.target.value)
    }
    return (
        <React.Fragment>
            <NavBar />
            <div className='container pt-10'>
                <Title level={2}>Checkout</Title>
                <Divider className="divider" />
                <Row gutter={16}>
                    <Col span={16} lg={16} md={12} sm={24} xs={24}>
                        <Divider />
                        <Title level={5}>Payment Method</Title>
                        <div className="payment-card">
                            <Radio.Group onChange={handlevalue} value={value} style={{ with: '100%' }}>
                                <div className="card-header">
                                    <Radio value={'PayPal'}>PayPal</Radio>
                                        <img src={PayPal_logo} className="float-right" width="60" alt="PayPal" />
                                </div>    
                                <div className="card-body">
                                    <Radio value={'Credit'}>Credit / Debit Card</Radio>
                                    <img src={card_logo} className="float-right" width="60" alt="PayPal" />
                                    <Row gutter={16}>
                                        <Col span={12} lg={12} md={12} sm={24} xs={24}>
                                        <Input placeholder="Cardholder Name" className="card-input" />
                                        </Col>
                                        <Col span={12} lg={12} md={12} sm={24} xs={24}>
                                            <Input placeholder="Credit Card Number" className="card-input" />
                                        </Col>
                                        <Col span={8} lg={8} md={8} sm={24} xs={24}>
                                            <Input placeholder="Expiry Number" className="card-input" />
                                        </Col>
                                        <Col span={8} lg={8} md={8} sm={24} xs={24}>
                                            <Input placeholder="Expiry Year" className="card-input" />
                                        </Col>
                                        <Col span={8} lg={8} md={8} sm={24} xs={24}>
                                            <Input placeholder="cvc" className="card-input" />
                                        </Col>
                                    </Row>
                                </div>
                            </Radio.Group>
                        </div>
                    </Col>
                    <Col span={8} lg={8} md={12} sm={24} xs={24}>
                        <div className="payment-card m-t">
                            <div className="card-header">
                                <Text>Summary</Text>
                            </div>
                            <div className="card-body font-size-13">
                                <div className="mb-1">
                                    <Text>Standard Plan <span className="float-right">$49.00</span></Text>
                                </div>
                                <div className="mb-2">
                                    <Text>Vat (20%) <span className="float-right">$9.80</span></Text>
                                </div>
                                <Divider className="m-0"/>
                                <div className="mt-2">
                                    <Text>Final Price <span className="float-right">$9.80</span></Text>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="mt-3">
                    <Button type="primary">Proceed Payment</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Checkout
