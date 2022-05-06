const initialState = {
    list: [
        {
            userid: 'hb',
            content: '내용',
            date: '2022-05-06'
        },
        {
            userid: 'hb',
            content: '내용22',
            date: '2022-05-06'
        },
    ],
    loading: false,
    error: null
}

const ADD = 'COMMENT/ADD'
const READ = 'COMMENT/READ_'

export const add = (payload) => ({ type: 'COMMENT/ADD_REQUEST', payload })
export const read = () => ({ type: 'COMMENT/READ_REQUEST' })

// export const down = () => ({ type: 'COUNTER/DOWN_REQUEST' })

const comment = (state = initialState, action) => {
    switch (action.type) {
        //READ
        case "COMMENT/READ_REQUEST":
            console.log('read/req')
            return {
                ...state,
                loading: true,
                error: null
            }
        case "COMMENT/READ_SUCCESS":
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case "COMMENT/READ_FAILURE":
            return {
                ...state,
                error: 'api접속에러같음',
                loading: false
            }

        // CREATE
        case "COMMENT/ADD_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "COMMENT/ADD_SUCCESS": {
            console.log('payload : ',)
            return {
                ...state,
                list: [action.payload.data.result, ...state.list],
                loading: false
            }
        }
        case "COMMENT/ADD_FAILURE":
            return {
                ...state,
                error: 'api접속에러같음',
                loading: false
            }


        default:
            return state
    }
}

export default comment