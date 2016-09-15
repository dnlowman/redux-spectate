import { UPDATE_TEXT, LISTEN } from './constants';

const initialState = {
    text: '',
    listening: false
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_TEXT: {
            return Object.assign({}, state, {
                text: action.payload.text
            });
        }

        case LISTEN: {
            return Object.assign({}, state, {
                listening: true
            });
        }

        default:
            return state;
    }
}
