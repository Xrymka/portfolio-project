import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/work-1.webp"
import timerImg from "./../../../assets/images/work-2.webp"
import { Container } from "../../../components/Container";
import { TabMenu } from "./tabMenu/TabMenu";
import { S } from "./Works_Styles";

const worksItem = ["All", "landing page", "react", "spa"]

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItem}></TabMenu>
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} gap={"30px"}>
          <Work src={socialImg}
                title={"Social Network"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
          <Work src={timerImg}
                title={"Timer"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};