import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

const DesktopMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
    }
`;

const NavLink = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  color: ${theme.colors.accent};
  overflow-y: hidden;
  transition: transform ${theme.animation.transDefault}, color ${theme.animation.transDefault};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const MenuItem = styled.li`
  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    content: "";
    display: inline-block;
    height: 3px;
    z-index: 1;
    background-color: ${theme.colors.accent};
    transform: scale(0);
    transition: transform ${theme.animation.transDefault};
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      color: ${theme.colors.font};
      transform: skewX(12deg) translateX(5px);

      & + ${Mask} {
      transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;

const MobileMenu = styled.nav`

`;

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    position: absolute;
    left: 40px;
    bottom: 50px;
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    transition: transform ${theme.animation.transDefault};

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}
  
    &::before {
      position: absolute;
      transform: translateY(-10px);
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      transition: transform ${theme.animation.transDefault};

      ${props => props.isOpen && css<{isOpen: boolean}> `
        transform: rotate(-45deg) translateY(0);
      `}
    }
  
    &::after {
      position: absolute;
      right: 0;
      transform: translateY(10px);
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      transition: transform ${theme.animation.transDefault}, width ${theme.animation.transDefault};

      ${props => props.isOpen && css<{isOpen: boolean}> `
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`;

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform ${theme.animation.transDefault};
  background-color: rgba(31, 31, 32, 0.9);

  ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: translateY(0);
  `}

  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const S = {
  NavLink,
  Mask,
  MenuItem,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu
}