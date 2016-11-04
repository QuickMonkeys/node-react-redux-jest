import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/search.js';
import Search from '../components/search.jsx';

const mapStateToProps = (state) => { return { filter: state.filter } }

const mapDispatchToProps = (dispatch) => { return { actions: bindActionCreators (actions, dispatch) } }

export default connect(mapStateToProps, mapDispatchToProps)(Search);
