import React, { Component } from 'react';
import { choice } from './helpers';
import './ColorBox.css';

class ColorBox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.color),
        }
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor() {
        const withoutCurrentColorArray = this.props.color.filter(color => color !== this.state.color); 

        const newColor = choice(withoutCurrentColorArray); 
        
        this.setState({
            color: newColor,
        }) 
    }

    handleClick(e) {
        this.changeColor();
    }    

    render() {
        return (
            <div 
                onClick={this.handleClick} 
                className='ColorBox' 
                style={{backgroundColor: this.state.color}}>
            </div>
        )
    }
}

export default ColorBox; 