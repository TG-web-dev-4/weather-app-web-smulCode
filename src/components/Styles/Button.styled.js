import styled from "styled-components";

export const ButtonStyled = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#ACCFE3" : "white")};
  color: ${(props) => (props.primary ? "white" : "#ACCFE3")};

  font-size: 1em;
  margin-bottom: 1.4em;
  padding: 1em 1.5em;
  /* border: 2px solid #ccc; */

  transition: all 300ms ease-in-out;
  outline: none;
  border: none;

  svg {
    transition: all 500ms ease-in-out;
  }
  &:hover {
    cursor: pointer;
    background-color: lightgrey;

    svg {
      color: #111;
    }
  }
`;
