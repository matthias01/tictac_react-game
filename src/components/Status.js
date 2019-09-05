import React, { Component } from 'react';
import ChoosePlayer from './ChoosePlayer';
import { Button } from '@material-ui/core';
export class Status extends Component {

    handleSetPlayer(e){
        this.props.setPlayer(e)
    }

    handleReset(){
   console.log('hhhh')
        //this.props.resetGame()
    }

    showStatus(){
        if(this.props.winner){
            return(
                <React.Fragment>
                    <h2>Winner is { this.props.winner}</h2>
                    <Button variant="contained" color="primary" onClick={this.handleReset()}>Reset</Button>
                </React.Fragment>
               
            )
        } else{
            return(
                this.props.player ? 
                <h3>Next player is { this.props.player } </h3> :
                 <ChoosePlayer player={(e)=>this.handleSetPlayer(e)}/>
            )
        }
    }
    render() {
        return (
            this.showStatus()
        )
    }
}

export default Status
