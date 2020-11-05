import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playersActions from '../actions/players';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (players, filterBy) => {
    switch (filterBy) {
        case 'injury_high':
            return orderBy(players, 'injury', 'desc');
        case 'injury_low':
            return orderBy(players, 'injury', 'asc');
        case 'name':
            return orderBy(players, 'name', 'asc');
        default:
            return players;
    }
};

const filterPlayers = (players, searchQuery) =>
    players.filter(
        o =>
            o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );

const searchPlayers = (players, filterBy, searchQuery) => {
    return sortBy(filterPlayers(players, searchQuery), filterBy);
};

const mapStateToProps = ({ players, filter }) => ({
    players: players.items && searchPlayers(players.items, filter.filterBy, filter.searchQuery),
    isReady: players.isReady,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(playersActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
