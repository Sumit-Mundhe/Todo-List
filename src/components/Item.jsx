import React, { useState } from "react";
import ReactDom from "react-dom";

function List(props){
    
    return(
        <li 
        onClick={()=>{
            props.onChecked(props.id)}}
        id={props.id}>{props.x}</li>
    )
}

export default List