import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../actions/list';
import PlayerList from '../components/PlayerList';

const mapStateToProps = ({ list }, { id }) => ({
    addedCount: list.items.reduce((count, player) => count + (player.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(listActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlayerList);
