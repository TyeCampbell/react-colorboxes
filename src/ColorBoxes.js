import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxes.css';

class ColorBoxes extends Component {
    
    static defaultProps = {
        boxes: 18,
    }

    render() { 

        // colorbox emplty array 
        let colorBoxArray = []; 

        // loops how many ColorBox components are needed in the array
        for (let i = 0; i < this.props.boxes; i++) {
           colorBoxArray = colorBoxArray.concat(<ColorBox key={i}/>)
        }

        // maps over the array for the amount of boxes called for
         const colorBoxes = colorBoxArray.map( component => component)

        return (
            <div className='ColorBoxes'>
                {colorBoxes}
            </div>
        )
    }
}

export default ColorBoxes; 
