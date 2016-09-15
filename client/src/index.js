import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import spectate from './Middleware/spectate';
import exampleFormReducer from './ExampleFormContainer/reducer';
import ExampleFormContainer from './ExampleFormContainer';
import { client, subscribe } from './socketClient';

subscribe((action) => {
    let state = store.getState();

    if(state.exampleForm && state.exampleForm.listening === true)
        store.dispatch(JSON.parse(action));
    else
        console.log("You're not listening");
});

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               defaultIsVisible={true}>
       <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

const reducer = combineReducers({
    exampleForm: exampleFormReducer
});

let store = createStore(reducer, compose(
    applyMiddleware(spectate),
    DevTools.instrument()
));


ReactDOM.render(
    <Provider store={store}>
        <div>
            <DevTools />
            <ExampleFormContainer />
        </div>
    </Provider>,
    document.getElementById('react-container')
);
