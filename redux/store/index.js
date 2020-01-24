import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/index'
import ReduxThunk from 'redux-thunk';
export default store = createStore(reducer, applyMiddleware(ReduxThunk));