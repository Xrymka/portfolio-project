import { styled } from "styled-components";
import { Link } from "../../../../components/Link";

export const TabMenu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledTabMenu>
    <ul>
      {props.menuItems.map((item: string, index: number) => {
        return <ListItem key={index}>
          <Link href="">{item}</Link>
        </ListItem>
      })}
    </ul>
  </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 352px;
    width: 100%;
  }
`;

const ListItem = styled.li`
`;


