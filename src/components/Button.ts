import { styled } from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  position: relative;
  z-index: 0;
  width: 170px;
  height: 32px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;

  &::before {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    content: "";
    width: 50%;
    height: 10px;
    background-color: ${theme.colors.accent};
    transition: width ${theme.animation.transDefault}, height ${theme.animation.transDefault};
  }

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }
`