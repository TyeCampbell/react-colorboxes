import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxes.css';

class ColorBoxes extends Component {
    
    static defaultProps = {
        boxes: 18,
        color: ['#FF0D00', '#FF8500', '#FFBB00', '#FF3700', '#C6F900', '#38E800', '#00C1C1', '#1B11D0', '#6C09CD', '#DD008B']
    }

    render() { 

        let colorBoxArray = []; 

        for (let i = 0; i < this.props.boxes; i++) {
           colorBoxArray = colorBoxArray.concat(<ColorBox key={i} color={this.props.color}/>)
        }

        const colorBoxes = colorBoxArray.map( component => component)

        return (
            <div className='ColorBoxes'>
                {colorBoxes}
            </div>
        )
    }
}

export default ColorBoxes; 
