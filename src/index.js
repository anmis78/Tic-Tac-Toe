import React from 'react';
import ReactDOM from 'react-dom/client';
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
  render(){    
    return (
      <button className="square"
        style={squareStyle} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}


  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true
      }
    }
    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    }

    handleClick(i){
      let square_ = this.state.squares.slice();
      square_[i] = this.state.xIsNext? 'X':'O'
      this.setState({
        squares: square_,
        xIsNext: !this.state.xIsNext
      })
    }

    render() {
      const status = 'Next player: X';
  
      return (
        <div style={containerStyle} className="gameBoard">
          <div id="statusArea" className="status" style={instructionsStyle}>{"Next player: "+ (this.state.xIsNext? 'X':'O')}</div>
          <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
          <button style={buttonStyle}>Reset</button>
          <div style={boardStyle}>
            <div className="board-row" style={rowStyle}>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row" style={rowStyle}>
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row" style={rowStyle}>
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
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
  