import React from 'react';
import './App.css';
import axios from 'axios';
import Players from './components/Players';
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
    // console.log('Constructor is running!');

  }

  // abortController = new AbortController()

  componentDidMount() {
    axios
      // .get('http://localhost:5000/api/players', { signal: this.abortController.signal })
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

  // componentWillMount() {
  //   this.abortController.abort()
  // }

  render() {
    return (
      <div className="App">
        <>
          <Navbar />
          <Players players={this.state.players}/>
        </>
      </div>
    );
  }
}

export default App;
