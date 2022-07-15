import React from "react";
import './Display.css';

const Display=(props)=>{
console.log(props);
    return(
        <React.Fragment>
        <h2>{props.title}</h2>
        <span><h3>{props.releaseDate}</h3></span>
        <li className='display'>
            
            
            <p>{props.openingdate}</p>
        </li>
        </React.Fragment>
    )
};

export default Display;