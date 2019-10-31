import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxes.css';

class ColorBoxes extends Component {
    
    static defaultProps = {
        color: ['red','orange','gold','yellow','lime','green','sky','blue','purple','pink']
    }

    constructor(props) {
        super(props);
    }

    colorRandom() {
        return this.props.color[Math.floor(Math.random() * this.props.color.length)]
    }


    render() { 

        return (
            <div className='ColorBoxes'>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
                <ColorBox color={this.colorRandom()}/>
            </div>
        )
    }
}

export default ColorBoxes; 
