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

    colorRandom() {
        return this.props.color[Math.floor(Math.random() * this.props.color.length)]
    }

    changeColor() {

        //create array without the current color in it. using filter?
        const withoutCurrentColorArray = this.props.color.filter(color => color !== this.state.color); 

        // random over the new array 
        const newColor = withoutCurrentColorArray[Math.floor(Math.random() * withoutCurrentColorArray.length)]; 
        // set the state based on the new selection

        console.log(newColor);

        this.setState({
            color: newColor,
        })
    
    }

    handleClick(e) {
        this.changeColor();
    }    

    render() {
        
        let color = 'color-' + this.state.color;
        
        return (
            <div onClick={this.handleClick} className={`ColorBox ${color}`}>
            </div>
        )
    }
}

export default ColorBox; 