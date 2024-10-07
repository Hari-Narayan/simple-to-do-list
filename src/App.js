import { Col, Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import TodoApp from "./todo";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <TodoApp />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
