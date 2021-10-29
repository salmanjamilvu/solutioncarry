const initisalState = {
    question : [
        {
            ques : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            description : 'Lorem Ipsum is simply dummy ',
            cate_id : '1'
        },
        {
            ques : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            description : 'Lorem Ipsum is simply dummy ',
            cate_id : '2'
        },
    ],
    categories : [
        {
            id : 1,
            name : 'Computer',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            image : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        },
        {
            id : 2,
            name : 'Physics',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            image : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        }
    ],
}

const manageQuestion = ( state = initisalState, action ) => {
    switch (action.type) {
        case 'action':
            return state
        default:
            return state
    }
}
export default manageQuestion