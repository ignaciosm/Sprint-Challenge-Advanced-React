import React from 'react';
import './App.css';
import axios from 'axios';
import Players from './components/Players';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
    console.log('Constructor is running!');

  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // console.log('res', res.data)
        this.setState({
          players: res.data
        });
        console.log('players',this.state.players);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <>
          {/* <h1>Players</h1>
          {this.state.players.map(player => {
            <p>{player.name}</p>
          })} */}
          <Players players={this.state.players}/>
        </>
      </div>
    );
  }
}

export default App;
