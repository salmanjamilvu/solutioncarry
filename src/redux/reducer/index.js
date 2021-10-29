import { combineReducers } from 'redux'
import manageQuestion from './quesReducer'
const rootReducers = combineReducers({
    manageQuestion,
})
export default rootReducers