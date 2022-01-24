import styled from "styled-components";

export const MainContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

  min-width: 100%;
  font-family: "Poppins", sans-serif;
  color: #fff;


  @media only screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }
`;
