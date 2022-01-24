import styled from "styled-components";
import { keyframes } from "styled-components";

const slideDown = keyframes`
0% { opacity: 0;
   transform: translateY(-10px);}

100% {  opacity: 1;
   transform: translateY(0) ;}
    `;

export const WeeklyWeatherStyled = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  transform-origin: top center;

  .container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0 0;
    text-align: center;
    width: 100%;
    /* background-color: rgba(37, 38, 39, 0.5);
    backdrop-filter: blur(5px); */
    color: #fff9;
    padding: 20px;
    position: relative;
    animation: ${slideDown} 800ms ease-in-out;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
      color: #fff;
    }

    &::after {
      position: absolute;
      inset: 0;
      content: "";
      transition: filter 300ms ease-in-out;
    }

    svg {
      fill: #fff;
      font-size: 1.5em;
      margin-top: 0.3em;
      transition: all 0.3s ease-in-out;
    }

    .date {
      width: fit-content;
    }

    p {
      margin: auto 0;
    }

    img {
      margin: 0 auto;
    }

    .content {
      display: none;
      height: 0;
      animation: ${slideDown} 300ms ease-in-out;
    }
  }

  .arrow.active {
    svg {
      transform: rotate(180deg);
    }
  }

  .container.active {
    border-bottom: 1px solid #ccc;

    .content {
      display: flex;
      justify-content: space-evenly;
      grid-column: 1/-1;
      height: 100%;
    }
  }
`;
