import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormControl, Radio, FormControlLabel, RadioGroup, Button} from '@material-ui/core';
import RaisedButton from 'material-ui/RaisedButton'

export class ChoosePlayer extends Component {
    

    handleSubmit(e) {
        e.preventDefault();
      this.props.player(e.target.player.value)
      // console.log(e.target.player)
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <FormControl className="container">
                <RadioGroup aria-label="position" name="player" row>
                    <FormControlLabel
                        value="X"
                        control={<Radio color="primary" />}
                        label="Player X"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="O"
                        control={<Radio color="primary" />}
                        label="Player O"
                        labelPlacement="start"
                    />
                                    
                   
                </RadioGroup>
                <Button type="submit" variant="contained" color="primary">
                    Start
                    </Button>
                </FormControl>
            </form>
              
           
            
        )
    }
}

export default ChoosePlayer
