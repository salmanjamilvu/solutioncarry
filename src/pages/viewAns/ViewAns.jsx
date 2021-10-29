import React from 'react'
import { Button, Divider, Typography } from 'antd'
import './viewAns.css'
import NavBar from '../../components/navbar/NavBar'

const { Title } = Typography
const ViewAns = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="container pt-10">
                <Title level={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Title>
                <Divider className="divider" />
                <Title level={3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Title>
                <div className="text-center mt-7">
                    <Button type="primary" className="btn">View Full Answer $20</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ViewAns
