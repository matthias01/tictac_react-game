import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import "./App.css";
import Status from './components/Status';



class App extends Component {
  constructor(props){

    super(props)
    this.state = {
      board : Array(9).fill(null),
      player: null,
      winner : null
    }
  }
handleClick(index){
 let newBoard = this.state.board;
//allow only null boxes to change, //stop playing when when is found // prevent if palyer isnt set
 if(!this.state.winner && this.state.player){

  if(this.state.board[index] === null ){
    newBoard[index] = this.state.player
    this.setState({
      board : newBoard,
      player : this.state.player ==='X' ? 'O' : 'X'
   
    })
   }
   this.checkWinner();
 }
 


}

checkWinner(){
  let winnigLines =[
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6'],
  ]

  this.checkMatch(winnigLines)
  
}

checkMatch(winnigLines){
  for( let index= 0; index<winnigLines.length; index++){
    const [a, b,c,] = winnigLines[index]; //
    const{ board } = this.state
    if(board[a] && board[a] === board[b] && board[a] === board[c] ){
      this.setState({
        winner : this.state.player
      })
      alert(this.state.player+' won');
    }
  }
}

setPlayer(player){

  this.setState({ player})
 
}

resetGame(){
  console.log('reset game')
}
renderBoxes(){
   //get the index of a box, pass d index to a click even
  return this.state.board.map( (box, index) => 
      <div className="box" key={index}
      onClick={ () => this.handleClick(index)} >
      {box}
      </div>
  )
}
  render(){
    
   
    return (
        <MuiThemeProvider>
          <div className="container">
              <AppBar title="Tic Tac Toe App"/>
              <Status player= {this.state.player} 
              setPlayer ={(e) => this.setPlayer(e)}
              winner = { this.state.winner}
              resetGame = { this.resetGame()}
              />
              <div className="board">
                  { this.renderBoxes()}
              </div>
              
            </div>
        </MuiThemeProvider>
     );
  }
 
}

export default App;
