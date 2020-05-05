import React, { Component } from 'react'
import './IdeaForm.css'
import Chairbg from '../theme/blackmodern.jpeg'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from 'react-router-dom';


export default class IdeaForm extends Component {
    state ={
            name:"",
            tone:"",
            color:"",
            image:"",
            description:"",
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

    handleSubmit = (event) => {
        event.preventDefault()
            this.props.matchFurniture(this.state.name, this.state.tone) 
    }

    render() {
        const {name, tone, color, image, description} = this.state
    
        return (
            <div className="ideaform-container">
                <div className="image-bg-container">
                    <img src={Chairbg}/>
                </div>
                <div className="form-container">
                    <form className="style-form" onSubmit={this.handleSubmit} >
                    <h1 className="ideaboard-title">Create your Ideaboard</h1>
                        <div className="select-form">
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
                        <TextField
                            label="Colors"
                            id="outlined-margin-none"
                            name="color"
                            value={color}
                            placeholder="Add Colors"
                            className="style-form"
                            helperText="please add the colors"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        </div>
                        <br></br>
                        <div className="input-form">
                         <TextField
                            id="outlined-full-width"
                            label="Image"
                            name="image"
                            value={image}
                            placeholder="Image url"
                            fullWidth
                            InputLabelProps={{
                            shrink: true,
                            }}
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <br></br>
                        <TextField
                            id="outlined-full-width"
                            label="Description"
                            name="description"
                            value={description}
                            placeholder="Description"
                            fullWidth
                            InputLabelProps={{
                            shrink: true,
                            }}
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        </div>
                        <br></br>
                        <input type="submit" value="SUBMIT" className="style-button"/>
                    </form>
                </div>
            </div>
        )
    }
}



  

