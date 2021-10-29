import React from 'react'
import { Typography } from 'antd'
import PHeader from '../../components/header/PHeader'
import NavBar from '../../components/navbar/NavBar'
import { CopyFilled } from '@ant-design/icons'
import './studyhelp.css'
import Questions from '../../components/question/Questions'
import Pagi from '../../components/pagination/Pagi'
import { useSelector } from 'react-redux'

const { Title } = Typography
const StudyHelp = () => {
    const quest = useSelector(state => state.manageQuestion)
    return (
        <React.Fragment>
            <NavBar />
            <PHeader />
            <div className="container">
                <div className="study-titile-container">
                    <Title level={2}><CopyFilled /> h2. Ant Design</Title>
                </div>
                {quest.question.map((ques, key) => (
                    <Questions
                        key={key}
                        ques={ques.ques}
                        cate_id={ques.cate_id}
                    />
                ))}
                <Pagi />
            </div>
        </React.Fragment>
    )
}

export default StudyHelp
