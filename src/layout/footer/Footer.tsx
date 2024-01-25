import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"} gap={"30px"}>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"instagram"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"telegram"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"vk"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"linkedin"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>&copy;&nbsp;2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  padding: 40px 0;
  background-color: ${theme.colors.primaryBg};
`

const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  font-weight: 700;
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