import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import './home.css'
import { Input, Typography, Row, Col } from 'antd'
import { GithubFilled } from '@ant-design/icons'
import Category from '../../components/cateCards/Category'
import Pagi from '../../components/pagination/Pagi'
import { useSelector } from 'react-redux'

const { Title } = Typography
const Home = () => {
    const state = useSelector(state => state.manageQuestion)
    console.log()
    return (
        <React.Fragment>
            <NavBar />
            <div className="header-img">
                <GithubFilled className="header-icon" />
                <Title level={5}>h5. Ant Design</Title>
                <div className="header-search">
                    <Input.Search size="large" placeholder="input here" />
                </div>
            </div>
            <div className="container">
                <Title level={1} className="home-heading">HEADING</Title>
                <Row gutter={16}>
                    {state.categories.map((cat) => (
                        <Col key={cat.id} span={6} lg={6} md={12} sm={24} xs={24}>
                            <Category
                                name = {cat.name}
                                description = {cat.description}
                                image = {cat.image}
                            />
                        </Col>
                    ))}    
                </Row>
                <Pagi />
            </div>
        </React.Fragment>
    )
}

export default Home
