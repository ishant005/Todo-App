import React, { useState } from "react";

const ToDoForm=({addTask})=>{
    const[userInput,setUserInput]=useState('');

    const handleChange=(e)=>{
         setUserInput(e.currentTarget.value)
    };

    const handleSubmit=(e)=>{
        addTask(userInput)
        e.preventDefault();
        setUserInput("")
    }
    return(
        <form onSubmit={handleSubmit}>
         <input value={userInput} type="text" onChange={handleChange}/>
         <button>Submit</button>
        </form>
    )
}
export default ToDoForm;