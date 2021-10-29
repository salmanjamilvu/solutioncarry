import React from 'react'
import { Row, Col } from 'antd'
import NavBar from '../../components/navbar/NavBar'
import './profile.css'
import EmailNotifi from '../../components/email-notif/EmailNotifi'
import DeleteAccount from '../../components/delete-account/DeleteAccount'
import ResetPass from '../../components/reset-pass/ResetPass'
import ProfileInfo from '../../components/profile-info/ProfileInfo'

const Profile = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="container pt-10">
                <Row justify="start" className="setting-container">
                    <Col span={6} lg={6} md={8} sm={24} xs={24} className="list-container">
                        <ul className="list">
                            <li>Manage Account</li>
                            <li>Email Notifications</li>
                            <li>Delete Account</li>
                            <li>Reset Account</li>
                        </ul>
                    </Col>
                    <Col span={12} lg={12} md={14} sm={24} xs={24} className="content-container">
                        <ProfileInfo />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Profile
