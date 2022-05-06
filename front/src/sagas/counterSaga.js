// counter 관련 saga미들웨어
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'


async function upAPI(payload) {
    console.log(payload)
    // return await axios.post('http://localhost:3500', payload)
    return new Promise((res, rej) => {
        setTimeout(() => { res(true) }, 1000)
    })
}

async function downAPI(payload) {
    console.log(payload)
    // return await axios.post('http://localhost:3500', payload)
    return new Promise((res, rej) => {
        setTimeout(() => { res(true) }, 1000)
    })
}
// async await 꼭 써줘야함 안그러면 counterUp함수의 call의 result로 pending이 떨어짐

// take 메서드로 호출된 함수는 action값을 인자로 받음 (type, payload 포함한 action 전체)
function* counterUp(action) {
    // 여기서 API 관련 내용을 작성해야함
    try {
        // call 인자값 1. 함수명, 2. 1번에 들어간 함수의 인자값
        const result = yield call(upAPI, action.payload)  //await처럼 동기적으로 upAPI 함수를 실행
        yield put({ type: 'COUNTER/UP_SUCCESS' })
    } catch (e) {
        yield put({ type: 'COUNTER/UP_FAILURE' })
    }
}

function* counterDown(action) {
    // 여기서 API 관련 내용을 작성해야함
    try {
        // call 인자값 1. 함수명, 2. 1번에 들어간 함수의 인자값
        const result = yield call(downAPI, action.payload)  //await처럼 동기적으로 upAPI 함수를 실행. 여기들어가는 함수는 *함수가 아니라 일반함수여야함!!
        yield put({ type: 'COUNTER/DOWN_SUCCESS' })
    } catch (e) {
        yield put({ type: 'COUNTER/DOWN_FAILURE' })
    }
}


// 함수의 목적 : action값의 추적!
// dispatch({type:'UP'}) 발생시
// export function* watchCounterUp() {
//     // take 관련 : 인자값 2개 필요 (1.action.type (ex. 'UP', 'comment/ADD' ...), 2.type추적되었을때 실행할 함수명<- 이 함수도 *함수여야함!!)
//     yield takeLatest('COUNTER/UP_REQUEST', counterUp)
// }

// export function* watchCounterDown() {
//     // take 관련 : 인자값 2개 필요 (1.action.type (ex. 'UP', 'comment/ADD' ...), 2.type추적되었을때 실행할 함수명<- 이 함수도 *함수여야함!!)
//     yield takeLatest('COUNTER/DOWN_REQUEST', counterDown)
// }

// 이렇게 두개의 watch 함수로 나눠도 되고 하나의 watch함수에 yield를 up, down 나눠서 두줄로 코드를 삽입해도 됨 (내부에서 해당 액션타입을 찾을 때까지 next를 돌려줌)
export function* watchCounter() {
    // take 관련 : 인자값 2개 필요 (1.action.type (ex. 'UP', 'comment/ADD' ...), 2.type추적되었을때 실행할 함수명<- 이 함수도 *함수여야함!!)
    yield takeLatest('COUNTER/UP_REQUEST', counterUp)
    yield takeLatest('COUNTER/DOWN_REQUEST', counterDown)
}