import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import Container from "./styled";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// ? Se eu utilizar o registerField fora do useEffect

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const { clearError, defaultValue, error, fieldName, registerField } =
    useField(name);

  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
