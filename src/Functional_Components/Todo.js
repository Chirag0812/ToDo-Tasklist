// Todomain.js act as PARENT of both AddTodo and Todolist

import React, { useState } from "react";
import AddTodo from './AddTodo';
import Todolist from "./Todolist";


const Todo = () => {


    const [tasklist, updatelist] = useState([])


    function statechange(text) {
        updatelist([...tasklist, {
            id: Math.random(),
            task: text,
            status: 1
        }])
    }

 
 

    return (
        <>

            <div className="main-Compo">
                <h1>ToDo App</h1>
                <AddTodo update={statechange} />
                <Todolist tasklist={tasklist} />
            </div>

       </>
       )

    }



export default Todo;