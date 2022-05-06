// side effects : redux-saga/effects
import { all, fork } from 'redux-saga/effects'
import { watchComment } from './commentSaga'
import { watchCounter } from './counterSaga'
// all : 여러 함수를 배열에 담아서 여러개를 실행시킬 수 있음

export default function* rootSaga() {
    // yield all([
    //     func1, func2, func3
    // ]) // func1,2,3 함수 동시 실행
    yield all([
        // side effect -> fork 붙여줌 ???
        // fork(watchCounterUp) 이걸로 가져와도 되고 그냥 아래줄처럼 가져와도 됨
        fork(watchCounter),
        fork(watchComment)
    ])

}

// fork : 함수를 논블로킹으로 실행하기 위한 메소드 : 블로킹/논블로킹 찾아보기
