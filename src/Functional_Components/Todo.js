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

 //task done function
    const taskDone = (id) => {
        // update state corresponding to this id - change the status
        //1 - not done, 2 - done, 3 - delete
        const temp = tasklist.map(el => {
            if (el.id === id) {
                return { ...el, status: 2 }
            } else {
                return el;
            }
        })
        updatelist(temp);
    }
    
    // Task delete function 
    const taskDelete = (id) => {
        // update state corresponding to this id - change the status
        //1 - not done, 2 - done, 3 - delete
        const tempp = tasklist.map(el => {
            if (el.id === id) {
                return { ...el, status: 3 }
            } else {
                return el;
            }
        })
    
        updatelist(tempp);
    }
    
    
    return (
        <>
            <div className="main-Compo">
                <h1>ToDo App</h1>
                <AddTodo update={statechange} />
                <Todolist tasklist={tasklist } markAsDone={taskDone} clearTodo={taskDelete} />
            </div>
       </>
       )

    }

export default Todo;