import React from "react";
import { Background, Container, Content } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
const SignIn = () => {
  return (
    <Container>
      <Content>
        <form action="submit">
          <h1>Plant +</h1>
          <Input icon={FiMail} name="email" placeholder="e-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
