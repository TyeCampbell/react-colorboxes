import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    
    static defaultProps = {
        color: ['#FF0D00', '#FF8500', '#FFBB00', '#FF3700', '#C6F900', '#38E800', '#00C1C1', '#1B11D0', '#6C09CD', '#DD008B']
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.colorRandom(),
        }
        this.colorRandom = this.colorRandom.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    //randomly selects a color from the defaultProps array 
    colorRandom() {
        return this.props.color[Math.floor(Math.random() * this.props.color.length)]
    }

    // changes current color into a new color without changing to the same color 
    changeColor() {
        //create array without the current color in it using filter
        const withoutCurrentColorArray = this.props.color.filter(color => color !== this.state.color); 

        // random selct color over the new array 
        const newColor = withoutCurrentColorArray[Math.floor(Math.random() * withoutCurrentColorArray.length)]; 
        
        // set the state based on the new selection
        this.setState({
            color: newColor,
        }) 
    }

    handleClick(e) {
        this.changeColor();
    }    

    render() {
        // render div in the color that is selected in state 
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