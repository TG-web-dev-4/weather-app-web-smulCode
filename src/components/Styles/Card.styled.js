import styled from "styled-components";

import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
    `;

export const CardStyled = styled.div`
  padding: 1em 1em 0 0;
  animation: ${fadeIn} 1s ease-in;

  h1 {
    font-size: 5em;
    font-weight: 900;
    text-align: center;
  }

  img {
    margin: 0 auto;
  }

  .container-flex {
    display: flex;
    justify-content: space-evenly;
    margin: 1em;
  }

  .weather-description {
    margin-top: -3em;
    font-weight: bolder;
    padding-bottom: 1em;
  }

  p {
    text-align: center;
  }

  @media only screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1em;
    height: 100vh;

    .temperature {
      padding-left: 1em;
      grid-column: span 1;
      position: relative;
      h1 {
        position: absolute;
        bottom: 0;
        font-size: 7em;
      }
    }
    .weather-details {
      position: relative;
      .container-details {
        position: absolute;
        bottom: 0;
      }
    }
    .location-title {
      grid-column: span 3;
      position: relative;
      h2 {
        font-size: 4vw;
      }
    }
    .weather-img {
      position: relative;
      place-content: center;
      img {
        position: absolute;
        bottom: 0;
      }
      .weather-description {
        position: absolute;
        bottom: 0;
        left: 5%;
        place-content: center;
      }
    }
  }
`;
