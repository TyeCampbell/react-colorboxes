import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {

    render() {
        
        let color = 'color-' + this.props.color;
        
        return (
            <div className={`ColorBox ${color}`}>
            </div>
        )
    }
}

export default ColorBox; 