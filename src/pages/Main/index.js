import React from "react";

import { Container, Form } from "./styles";

function Main() {
  return (
    <Container>
      <Form>
        <input placeholder="Nome do usuário..." />
        <button>OK</button>
      </Form>
    </Container>
  );
}

export default Main;
