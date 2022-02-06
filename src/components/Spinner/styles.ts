import styled from "styled-components";
import { Props } from ".";

interface ContainerProps extends Props {}

export const SpinnerContainer = styled.svg<ContainerProps>`
  animation: rotate 1s linear infinite;
  margin: 40px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  & .path {
    stroke: ${(props) => props.color};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
