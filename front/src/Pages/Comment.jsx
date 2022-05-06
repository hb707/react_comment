import { useEffect, useState, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Responsive from '../Components/common/Responsive'
import { read, add } from '../reducers/comment'

const Comment = () => {
    const dispatch = useDispatch()
    const itemComment = useSelector(state => state.comment)
    const itemList = itemComment.list
    const list = useMemo(() => { }, [itemList])






    const onSubmit = useCallback((e) => {
        e.preventDefault()
        const { value } = e.target.content
        dispatch(add({ UserId: '1', content: value }))
    }, [dispatch])

    useEffect(() => {
        dispatch(read())
    }, [])
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     const { value } = e.target.content
    //     dispatch(add({ UserId: '1', content: value }))
    // }

    console.log('hello world ~~~~~~', itemList)

    const item = () => itemList.map((v, i) => {
        return (
            <ul key={i}>
                <li>{v.UserId}</li>
                <li>{v.content}</li>
                <li>{v.createdAt}</li>
            </ul>
        )
    })

    console.log(item())

    return (
        <Responsive>
            <h1>댓글 리스트 (2)</h1>
            <ul>
                <li>
                    <form onSubmit={onSubmit}>
                        <input type='text' name="content" />
                        <input type='submit' />
                    </form>
                </li>
                <li>
                    {item()}
                </li>
            </ul>
        </Responsive>
    )
}

export default Comment