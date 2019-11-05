import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxes.css';

class ColorBoxes extends Component {
    

    render() { 

        const colorBoxArray = [<ColorBox/>, <ColorBox/>, <ColorBox/>, <ColorBox/>, <ColorBox/>, <ColorBox/>, <ColorBox/>, <ColorBox/>, <ColorBox/>, <ColorBox/>]; 

        const iterator = colorBoxArray.map( component => component)



        return (
            <div className='ColorBoxes'>
                {iterator}
            </div>
        )
    }
}

export default ColorBoxes; 
