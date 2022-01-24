import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(37, 38, 39, 0.5);
  backdrop-filter: blur(5px); */

  &:focus {
    border: 1px solid #678efe;
  }

  input {
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.29em 1em;
    width: 100%;
    background-color: transparent;
    color: #fff;
    margin: 0 3em 0 1em;

    &:focus {
      outline: none;
      border-color: #fff;
    }

    &::placeholder {
      color: #fff9;
    }
  }
`;
