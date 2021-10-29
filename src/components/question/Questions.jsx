import React from 'react'
import { Typography } from 'antd'
import './question.css'

const { Text, Link } = Typography
const Questions = ({ques, cate_id}) => {
    return (
        <div className="question">
            <Text type="secondary">Q: {ques}</Text>
            <br />
            <Link href={cate_id}>
                A. View Answer
            </Link>
        </div>
    )
}

export default Questions
