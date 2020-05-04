import React, { Component } from 'react'
import './IdeaForm.css'
import Chairbg from '../theme/blackmodern.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


export default class IdeaForm extends Component {
    state ={
        name:"",
        tone:"",
        rooms: [
            {
                value: 'Living Room',
                label: 'Living Room',
            },
            {
                value: 'Kitchen&Dining Room',
                label: 'Kitchen&Dining Room',
            },
            {
                value: 'Bedroom',
                label: 'Bedroom',
            },
            {
                value: 'Bathroom',
                label: 'Bathroom',
            },
        ],
        theme: [
            {
                value: 'Earth Tone',
                label: 'Earth Tone',
            },
            {
                value: 'Vintage Tone',
                label: 'Vintage Tone',
            },
            {
                value: 'Warm Tone',
                label: 'Warm Tone',
            },
            {
                value: 'Winter Tone',
                label: 'Winter Tone',
            },
        ],
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    render() {
        const {name, tone} = this.state
      
        return (
            <div className="ideaform-container">
                <div className="image-bg-container">
                    <img src={Chairbg}/>
                </div>
                <div className="form-container">
                    <form className="style-form">
                        <div className="select-rooms">
                        <TextField
                            id="outlined-select-rooms"
                            select
                            name="name"
                            label="Rooms"
                            value={name}
                            onChange={this.handleChange}
                            helperText="Please select rooms"
                            variant="outlined"
                        >
                            {this.state.rooms.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
                        </div>
                        <div className="select-theme">
                        <TextField
                            id="outlined-select-theme"
                            select
                            name="tone"
                            label="Theme"
                            value={tone}
                            onChange={this.handleChange}
                            helperText="Please select theme"
                            variant="outlined"
                        >
                            {this.state.theme.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
                        </div>
                        <div className="input-form">
                        
                        <TextField
                            label="None"
                            id="outlined-margin-none"
                            defaultValue="Default Value"
                            className="style-form"
                            helperText="Some important text"
                            variant="outlined"
                        />
                        <TextField
                            label="Dense"
                            id="outlined-margin-dense"
                            defaultValue="Default Value"
                            className="style-form"
                            helperText="Some important text"
                            margin="dense"
                            variant="outlined"
                        />
                        <TextField
                            label="Normal"
                            id="outlined-margin-normal"
                            defaultValue="Default Value"
                            className="style-form"
                            helperText="Some important text"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Label"
                            style={{ margin: 8 }}
                            placeholder="Placeholder"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            variant="outlined"
                        />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



  

