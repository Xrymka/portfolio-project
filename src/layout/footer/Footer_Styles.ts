import styled from "styled-components"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"

const Footer = styled.section`
  padding: 40px 0;
  background-color: ${theme.colors.primaryBg};
`

const Name = styled.span`
  ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  color: ${theme.colors.accent};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: transform ${theme.animation.transDefault}, color ${theme.animation.transDefault};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright
}