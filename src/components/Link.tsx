import { styled } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
  position: relative;
  z-index: 0;
  padding: 10px;
  font-size: 14px;
  font-weight: 4;
  letter-spacing: 1px;
  text-transform: uppercase;

  &::before {
    position: absolute;
    right: 0;
    bottom: 5px;
    left: 0;
    z-index: -1;
    content: "";
    height: 0;
    background-color: ${theme.colors.accent};
    transition: height ${theme.animation.transDefault};
  }

  &:hover {
    &::before {
      height: 10px;
    }
  }
`