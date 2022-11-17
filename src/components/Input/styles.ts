import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;

export const Container = styled.div<ContainerProps>`
  background-color: #294d2f;
  border-radius: 10px;
  border: 2px solid #294d2f;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #5c9265;
      border-color: #5c9265;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #5c9265;
    `}
  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
