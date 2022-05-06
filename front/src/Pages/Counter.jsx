import Responsive from "../Components/common/Responsive"
import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { up, down } from "../reducers/counter"

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)

    // const onUp = () => {
    //     dispatch(up())
    // }

    // const onDown = () => {
    //     dispatch(down())
    // }

    const onUp = useCallback(() => { dispatch(up()) }, [dispatch]) // ❗️store에 있는 dispatch가 내부적으로 바뀌어서 이렇게 useCallback으로 dispatch를 쓰는게 공식임.
    const onDown = useCallback(() => { dispatch(down()) }, [dispatch])

    return (
        <Responsive>
            <h1> Counter : {counter.number}</h1>

            {
                counter.loading
                    ? <p>로딩중 입니다.</p>
                    : <>
                        <button onClick={onUp}>+1</button>
                        <button onClick={onDown}>-1</button>
                    </>
            }
            {
                counter.error
            }

        </Responsive>
    )
}

export default Counter