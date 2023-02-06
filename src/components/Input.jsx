import React,{useState} from "react";

function Input(props){
    const[input,setinput] = useState("")

    function update(event){
        setinput(event.target.value)
    }

    return(
        <div>
            <input onChange={update} value={input} type="text" placeholder="List" spellCheck="false"/>
            <button 
            onClick={()=>{
                props.onAdd(input);
                setinput("");
            }}
            >Add</button>
        </div>
    )
}

export default Input