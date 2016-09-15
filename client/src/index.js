import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               defaultIsVisible={true}>
       <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

function reducer(state = {}, action) {
    switch (action.type) {
        case 'TEXT_CHANGE': {
            return Object.assign({}, state, {
                text: action.payload.text
            });
        }

        default:
            return state
    }
}

let store = createStore(reducer, DevTools.instrument());

const onTextChange = (event) => {
    store.dispatch({
        type: 'TEXT_CHANGE',
        payload: {
            text: event.target.value
        }
    });
};

ReactDOM.render(
    <div>
        <DevTools store={store} />
        <input type="text" onChange={onTextChange} />
    </div>,
    document.getElementById('react-container')
);
