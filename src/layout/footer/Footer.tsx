import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
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
  min-height: 100vh;
  background-color: #1258dd;
`

const Name = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  
`

const Copyright = styled.small`
  
`