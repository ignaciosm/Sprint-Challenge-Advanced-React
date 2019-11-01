import React from 'react';

class Players extends React.Component {
  render() {
    // console.log("Players:", this.props.players.length)
    return (
      <div>
      <hr></hr>
      <h1>Players</h1>
        <ul data-testid="players-div">
          {this.props.players.map((player, index) => (
            <li data-testid="player-name">
              <p key={index}>{player.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Players;
