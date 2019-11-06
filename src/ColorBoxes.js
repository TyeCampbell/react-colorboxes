import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxes.css';

class ColorBoxes extends Component {
    
    static defaultProps = {
        boxes: 18,
    }

    render() { 

        let colorBoxArray = []; 

        for (let i = 0; i < this.props.boxes; i++) {
           colorBoxArray = colorBoxArray.concat(<ColorBox key={i}/>)
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
