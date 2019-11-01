import React from 'react';

class Players extends React.Component {
  render() {
    console.log("Players:", this.props)
    return (
      <div>
      <hr></hr>
      <h1>Players:</h1>
        <div>

          {this.props.players.map(player => (
            <div>
              <p>{player.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Players;
