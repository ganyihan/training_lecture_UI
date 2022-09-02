
// import freReducer from '../reducer/freReducer'
// import tableReducer from '../reducer/tableReducer'
// import chartReducer from '../reducer/chartReducer'
import {headerReducer} from '../reducer/headerReducer'
import { createStore } from 'redux'

export default  createStore (headerReducer);