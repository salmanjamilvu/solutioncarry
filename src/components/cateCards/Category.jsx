import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

const Category = ({name, image, description}) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={image} />}
        >
            <Meta title={name}  description={description.substring(0, 50)} />
        </Card>
    )
}

export default Category
