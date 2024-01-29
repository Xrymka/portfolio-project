import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section``;

const Skill = styled.div`
  flex-grow: 1;
  padding: 42px 20px 52px;
  width: 330px;

  svg {
    color: ${theme.colors.accent};
  }

  @media ${theme.breakpoints.mobile} {
    padding: 62px 0 40px;
  }
`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    transform: rotate(45deg) translate(-50%, -50%);
    content: "";
    width: 80px;
    height: 80px;
    opacity: 0.1;
    background-color: ${theme.colors.font};
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
`

export const S = {
  Skills,
  Skill,
  IconWrapper,
  SkillTitle,
  SkillText
}