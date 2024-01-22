import { styled } from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill'; 

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"}>
        <Skill description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt harum tempore."}
              iconId={"code"} 
              title={"HTML5"}/>
        <Skill description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt harum tempore."}
              iconId={"css"} 
              title={"CSS3"}/>
        <Skill description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt harum tempore."}
              iconId={"react"} 
              title={"React"}/>
        <Skill description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt harum tempore."}
              iconId={"typescript"} 
              title={"typescript"}/>
        <Skill description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt harum tempore."}
              iconId={"styledComponents"} 
              title={"styled-components"}/>
        <Skill description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt harum tempore."}
              iconId={"figma"} 
              title={"Web design"}/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #adadad;
`