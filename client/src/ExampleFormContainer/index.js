import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateText, listen } from './actionCreators';
import ExampleForm from './ExampleForm';

function mapStateToProps(state) {
    return {
        text: state.exampleForm.text,
        listening: state.exampleForm.listening
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTextChange: bindActionCreators(updateText, dispatch),
        onListenClicked: bindActionCreators(listen, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleForm);
