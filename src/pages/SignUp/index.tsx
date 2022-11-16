import React from "react";
import { Background, Container, Content } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";

const SignUp: React.FC = () => {
  function handleSubmit(data: Object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="e-mail" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
