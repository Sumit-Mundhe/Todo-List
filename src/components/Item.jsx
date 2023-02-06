import React, { useState } from "react";
import ReactDom from "react-dom";

function List(props){
    
    return(
        <div className="it">
        <li 
        onClick={()=>{
            props.onChecked(props.id)}}
        id={props.id}>{props.x}
        </li>
        <hr/>

        </div>
    )
}

export default List