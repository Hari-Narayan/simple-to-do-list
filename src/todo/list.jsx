import React from "react";
import { Table } from "react-bootstrap";

import TodoItem from "./item";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center" style={{ width: "100px" }}>
              #
            </th>
            <th>Task</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.lenght ? (
            todos.map((todo, index) => (
              <TodoItem
                todo={todo}
                id={index + 1}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          ) : (
            <tr>
              <th className="text-center" colSpan={3}>
                No record found!
              </th>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TodoList;
