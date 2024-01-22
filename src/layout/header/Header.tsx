import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Constact"]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu menuItems={items}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #a4ffa4;
`