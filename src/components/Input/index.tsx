import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import Container from "./styles";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const { clearError, defaultValue, error, fieldName, registerField } =
    useField(name);

  const [isFocused, setFocus] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
