import { styled } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string
  title: string
  description: string
}


export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId={props.iconId}/>
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  flex-grow: 1;
  padding: 62px 20px 40px;
  width: 330px;

  svg {
    color: ${theme.colors.accent};
  }

  @media ${theme.breakpoints.mobile} {
    padding: 62px 0 40px;
  }
`

export const IconWrapper = styled.div`
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