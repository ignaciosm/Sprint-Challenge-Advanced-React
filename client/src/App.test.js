import React from 'react';
import { render, getByTestId, getAllByText, cleanup } from '@testing-library/react';
import App from './App';
import Players from './components/Players'
import Navbar from './components/Navbar'

// afterEach(cleanup);

// it("matches snapshot", () => {
//   const { asFragment } = render(<App />);
//   expect(asFragment()).toMatchSnapshot();
// });

// test('players are displayed', () => {
//     const container = render(<Players />);
//   const element = getByTestId(container, 'player-element')
// })

test('Navbar title is displayed', () => {
  const { getByText } = render(<Navbar />);
  getByText("Players List");
})

test('it displays toggle element', () => {
  const { getByTestId } = render(<Navbar />);
  const toggleElement = getByTestId('toggle-element'); 
});

test('it displays players list', () => {
  const { getByTestId } = render(<App />);
  const playersList = getByTestId('players-div');
  // expect(playersList.players.length).toBe(101);  
  console.log('Children',playersList.children.length)
});

// test('it displays individual players names',async () => {
//   const { getByTestId } = render(<App />);
//   const playersName = getByTestId('players-name');
//   await playersName.instance().componentDidMount();
// })

test('Players title is displayed', () => {
  const { getByText } = render(<App />);
  getByText("Players");
})


it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />)
});
