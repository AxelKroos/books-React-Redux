import {CURRENT_INPUT, SHOW_SNIPPETS, OPEN_MODAL, CLOSE_MODAL, START_THE_DOWNLOAD} from "../actions/actionsType";

const initialState = {
    currentBook: '',
    loading: false,
    receivedBooks: [],
    isOpenModal: false,
    selectedBook: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CURRENT_INPUT:
            return {
                ...state,
                currentBook: action.payload
            }
        case START_THE_DOWNLOAD:
            return {
                ...state,
                loading: true
            }
        case SHOW_SNIPPETS:
            return {
                ...state,
                loading: false,
                receivedBooks: action.payload
            }
        case OPEN_MODAL:
            const selectedBook = state.receivedBooks[action.payload]
            return {
                ...state,
                isOpenModal: true,
                selectedBook: selectedBook
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: false
            }
        default:
            return state
    }
}