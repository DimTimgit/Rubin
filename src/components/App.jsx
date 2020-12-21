import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';
import PlayerList from '../containers/PlayerList';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

class App extends Component {
  componentWillMount() {
    const { setPlayers } = this.props;
    axios.get('/player-list.json').then(({ data }) => {
      setPlayers(data);
    });
  }

  render() {
    const { players, isReady } = this.props;
    return (
      <Container>
        <Menu position="fixed" />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : players.map((player, i) => <PlayerList key={i} {...player} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
