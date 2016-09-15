import { client, isOpen } from '../socketClient';

export default ({ getState }) => {
    return (next) => (action) => {
        let returnValue = next(action);
        let state = getState();

        if(isOpen && action.type !== 'LISTEN' && state.exampleForm.listening === false)
            client.send(JSON.stringify(action));

        return returnValue
    }
}
