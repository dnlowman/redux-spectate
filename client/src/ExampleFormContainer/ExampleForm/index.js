import React from 'react';

export default ({ listening, text, onListenClicked, onTextChange }) => {
    const listenButton = !listening ? <button onClick={onListenClicked}>Listen</button> : null;

    return (
        <div>
            <input type="text" value={text} onChange={(e) => onTextChange(e.target.value)} />
            {listenButton}
        </div>
    );
};
