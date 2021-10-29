import React from 'react'
import { Result } from 'antd'
import './succalert.css'
import NavBar from '../../components/navbar/NavBar'

const SuccAlert = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="pt-15">
                <Result
                status="success"
                title="Thank you for your order!"
                subTitle="Your payment has been processed successfully."
            />
            </div>
        </React.Fragment>
    )
}

export default SuccAlert
