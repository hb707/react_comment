const initialState = {
    number: 0,
    loading: false,
    error: null
}

const UP = 'COUNTER/UP'
const DOWN = 'COUNTER/DOWN'

export const up = () => ({ type: 'COUNTER/UP_REQUEST' })
export const down = () => ({ type: 'COUNTER/DOWN_REQUEST' })

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "COUNTER/UP_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "COUNTER/UP_SUCCESS":
            return {
                ...state,
                number: state.number + 1,
                loading: false
            }
        case "COUNTER/UP_FAILURE":
            return {
                ...state,
                error: 'api접속에러같음',
                loading: false
            }

        case "COUNTER/DOWN_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "COUNTER/DOWN_SUCCESS":
            return {
                ...state,
                number: state.number - 1,
                loading: false
            }
        case "COUNTER/DOWN_FAILURE":
            return {
                ...state,
                error: 'api접속에러같음',
                loading: false
            }
        default:
            return state
    }
}

export default counter