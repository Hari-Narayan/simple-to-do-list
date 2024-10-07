import React from "react";
import { Button } from "react-bootstrap";

const TodoItem = ({ id, todo, toggleTodo, deleteTodo }) => {
  return (
    <>
      <tr key={todo.id}>
        <th className="text-center" style={{ width: "100px" }}>
          {id}
        </th>
        <td>
          <p
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </p>
        </td>
        <td style={{ width: "150px" }}>
          <Button
            variant="danger"
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TodoItem;
