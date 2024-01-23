import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return <ListItem key={index}>
            <Link href="">
              {item}
              <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask>
            </Link>
          </ListItem>
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
    }
`;

const Link = styled.a`
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

const ListItem = styled.li`
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