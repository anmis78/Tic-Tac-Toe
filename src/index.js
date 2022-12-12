import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rowStyle = {
    display: 'flex'
  }
  
  const squareStyle = {
    'width':'60px',
    'height':'60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'white'
  }
  
  const boardStyle = {
    'backgroundColor': '#eee',
    'width': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid'
  }
  
  const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
  }
  
  const instructionsStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px',
  }
  
  const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#8acaca',
    'color': 'white',
    'fontSize': '16px',
  }

class Square extends React.Component {
    render() {
      return (
        <button className="square"
        style={squareStyle}>
          {/* TODO */}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div style={containerStyle} className="gameBoard">
          <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>X</span></div>
          <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
          <button style={buttonStyle}>Reset</button>
          <div style={boardStyle}>
            <div className="board-row" style={rowStyle}>
              <Square />
              <Square />
              <Square />
            </div>
            <div className="board-row" style={rowStyle}>
              <Square />
              <Square />
              <Square />
            </div>
            <div className="board-row" style={rowStyle}>
              <Square />
              <Square />
              <Square />
            </div>
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  