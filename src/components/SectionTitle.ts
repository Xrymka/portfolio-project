import { styled } from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  margin-bottom: 90px;
  ${font({family: '"Josefin Sans", sans-serif', weight: 600, Fmax: 36, Fmin: 30})}
  letter-spacing: 3px;

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

    @media ${theme.breakpoints.mobile} {
      bottom: -24px;
    }
  }
`