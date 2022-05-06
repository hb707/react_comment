import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'



async function readAPI(payload) {
    console.log(payload)
    return await axios.get('http://localhost:3500/comment/list')
}

async function addAPI(payload) {
    console.log(payload)
    return await axios.post('http://localhost:3500/comment/write', payload)
}


function* commentRead(action) {
    // 여기서 API 관련 내용을 작성해야함
    try {
        console.log('read saga')
        const response = yield call(readAPI, action.payload)  //await처럼 동기적으로 upAPI 함수를 실행
        console.log(response.data.result)
        yield put({ type: 'COMMENT/READ_SUCCESS', payload: response.data.result })
    } catch (e) {
        yield put({ type: 'COMMENT/READ_FAILURE' })
    }
}


function* commentAdd(action) {
    // 여기서 API 관련 내용을 작성해야함
    try {
        const result = yield call(addAPI, action.payload)  //await처럼 동기적으로 upAPI 함수를 실행
        console.log('saga')
        yield put({ type: 'COMMENT/ADD_SUCCESS', payload: result })
    } catch (e) {
        yield put({ type: 'COMMENT/ADD_FAILURE' })
    }
}


export function* watchComment() {
    yield takeLatest('COMMENT/READ_REQUEST', commentRead)
    yield takeLatest('COMMENT/ADD_REQUEST', commentAdd)
}