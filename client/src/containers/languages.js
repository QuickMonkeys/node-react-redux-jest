import { bindActionCreators } from 'redux';
import { connect }  from 'react-redux';

import * as actions from '../actions/languages.js';
import Languages from '../components/languages.jsx';

import Immutable from 'immutable';

const filter = (languages, filter) => filter == undefined ? languages : languages.filter( (f) => f.language.toLowerCase().indexOf(filter) != -1);

const mapStateToProps = (state) => {
    return {
        data: filter(state.get('languages'), state.get('filter')),
        total: state.get('languages').length
    }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators (actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Languages);
