import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Container, Error } from "./styles";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
import { FiAlertCircle } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { clearError, defaultValue, error, fieldName, registerField } =
    useField(name);

  const [isFocused, setFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputOnBlur = useCallback(() => {
    setFocus(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputOnFocus = useCallback(() => {
    setFocus(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <input
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {!!error && (
        <Error>
          <FiAlertCircle />
        </Error>
      )}
    </Container>
  );
};

export default Input;
