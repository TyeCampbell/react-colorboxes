import React, { Component } from 'react';
import { choice } from './helpers';
import './ColorBox.css';

class ColorBox extends Component {
    
    static defaultProps = {
        color: ['#FF0D00', '#FF8500', '#FFBB00', '#FF3700', '#C6F900', '#38E800', '#00C1C1', '#1B11D0', '#6C09CD', '#DD008B']
    }

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