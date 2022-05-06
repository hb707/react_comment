import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

// const enhancer = process.env.NODE_ENV === 'production'
//                  ? ''
//                  : composeWithDevTools

// const configStore = () => {
//     const store = createStore(rootReducer,enhancer)
//     return store    
// }

const sagaMiddleware = createSagaMiddleware() //redux-saga로 만든 미들웨어 -> sagaMiddleware.run(rootSaga)로 실행시켜줘야함
const middleWares = [sagaMiddleware] // 여기에 담아서 applyMiddleware에 스프레드로 삽입
const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleWares))
    : composeWithDevTools(applyMiddleware(...middleWares)) // 개발모드일때
const store = createStore(rootReducer, enhancer) // rootReducer , enhancer
sagaMiddleware.run(rootSaga) // sagas디렉토리의 index.js에 rootSaga 만들기


const Store = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Store