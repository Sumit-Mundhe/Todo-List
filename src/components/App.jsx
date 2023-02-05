import React, { useState } from "react";
import ReactDom from "react-dom";
import Item from "./Item";
import lists from "../lists";

// function createItem(it,index){
//     return(
//         <Item 
//         key={index} 
//         id={index}
//         x={it}
//         onChecked={deleteItem}
//          />
//     )
// }

function App(){
    const[input,setinput] = useState("")
    const[itemslist,setitemslist] = useState([])

    function update(event){
        setinput(event.target.value)
    }
    function add(){
        setitemslist((previtems)=>{
            return [...previtems,input];
        })
        setinput("")
    }
    function deleteItem(id){
        setitemslist(previtems=>{
            return previtems.filter(
                (item,index)=>{
                    return index!=id;
                });
            });
        }
        
        
        
        return(
            <div className="main">
            <h1>ToDo App</h1>
            <div>
                <input onChange={update} value={input} placeholder="list"/>
                <button onClick={add}>Add</button>
            </div>
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