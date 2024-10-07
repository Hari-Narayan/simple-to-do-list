import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const AddTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <InputGroup.Text className="btn-primary" type="submit">
            Add
          </InputGroup.Text>
        </InputGroup>
      </form>
    </>
  );
};

export default AddTodo;
