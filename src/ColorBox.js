import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    
    static defaultProps = {
        color: ['red','orange','gold','yellow','lime','green','sky','blue','purple','pink']
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
        
        //sets CSS color for the div 
        let color = 'color-' + this.state.color;
        
        return (
            <div onClick={this.handleClick} className={`ColorBox ${color}`}>
            </div>
        )
    }
}

export default ColorBox; 