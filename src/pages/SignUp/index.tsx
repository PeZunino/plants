import React, { useCallback, useRef } from "react";
import { Background, Container, Content } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      formRef.current?.setErrors({ name: "Obriga meu amigo" });

      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
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
