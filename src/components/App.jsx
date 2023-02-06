import React, { useState } from "react";
import ReactDom from "react-dom";
import Item from "./Item";
import Input from "./Input";


function App(){
    
    const[itemslist,setitemslist] = useState([])
    
    function add(input){
        setitemslist((previtems)=>{
            return [...previtems,input];
        })
    }

    function deleteItem(id){
        setitemslist(previtems=>{
            return previtems.filter(
                (item,index)=>{
                    return index!=id;
                }
            );
        });
    } 
        return(
            <div className="main">
            <h1>TODO APP</h1>
            <Input  onAdd={add} />
            <div className="lists">
                <ul>
                    {itemslist.map((it,index)=>(
                        <Item 
                        key={index} 
                        id={index}
                        x={it}
                        onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App