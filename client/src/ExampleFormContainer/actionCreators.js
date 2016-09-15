import { UPDATE_TEXT, LISTEN } from './constants';

export function updateText(text) {
    return {
        type: UPDATE_TEXT,
        payload: {
            text
        }
    }
}

export function listen() {
    return {
        type: LISTEN
    }
}
