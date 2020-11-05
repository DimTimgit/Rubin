import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../actions/list';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ list }) => ({
    totalPrice: list.items.reduce((total, player) => total + player.injury, 0),
    count: list.items.length,
    items: uniqBy(list.items, o => o.id),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(listActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Menu);
