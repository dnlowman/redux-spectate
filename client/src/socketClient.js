var W3CWebSocket = require('websocket').w3cwebsocket;

let subscribers = [];

export const client = new W3CWebSocket('ws://localhost:8081/', 'echo-protocol');
export let isOpen = false;
export const subscribe = (callback) => {
    subscribers.push(callback);
};

client.onerror = function() {
    console.log('Connection Error');
    isOpen = false;
};

client.onopen = function() {
    console.log('WebSocket Client Connected');
    isOpen = true;
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
    isOpen = false;
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
        subscribers.forEach(subscriber => subscriber(e.data));
    }
};
