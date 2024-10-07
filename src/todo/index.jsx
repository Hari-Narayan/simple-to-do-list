import { Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import AddTodo from "./add";
import TodoList from "./list";
import Filter from "./filter-list";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      if (prev.length > 1) {
        return prev.filter((todo) => todo.id !== id);
      } else {
        localStorage.clear();
        return [];
      }
    });
  };

  const filteredTodos = () => {
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    if (filter === "pending") return todos.filter((todo) => !todo.completed);
    return todos;
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <Row>
        <Col>
          <AddTodo addTodo={addTodo} />
        </Col>
        <Col>
          <Filter setFilter={setFilter} filter={filter} />
        </Col>
      </Row>
      <TodoList
        todos={filteredTodos()}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
