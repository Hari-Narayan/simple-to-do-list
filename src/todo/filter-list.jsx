import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({ filter, setFilter }) => {
  return (
    <>
      <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </Form.Select>
    </>
  );
};

export default Filter;
