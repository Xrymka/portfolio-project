import { styled } from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  margin-bottom: 90px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;

  &::before {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    content: "";
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
  }
`