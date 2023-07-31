//Add todo contains the inputbox to receive data and send it to parent as callback

import React, { useState } from "react";
import "../App.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
 
const AddTodo = (prop) => { 

  const [addTodo, stateupdatefn] = useState();

  const Onchangefn = (eve) => {
    stateupdatefn(eve.target.value)

  }

  function buttonclickk() {
    prop.update(addTodo);
    stateupdatefn('');
  }

  return (
    <>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add Tasks"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={Onchangefn}
          value={addTodo} // value is used to prefilling the data
        />
        <Button onClick={buttonclickk} variant="outline-secondary" id="button-addon2" >
          Save
        </Button>

      </InputGroup>
    </>
  )
}


export default AddTodo;