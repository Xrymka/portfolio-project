import { S } from "./Main_Styles"
import main from "../../../assets/images/main.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";


export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} gap={"10px"}>
          <div>
            <S.SmallText>Hi there</S.SmallText>
            <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
            <S.MainTitle>A Web Developer.</S.MainTitle>
          </div>

          <S.PhotoWrapper>
            <S.Photo src={main} alt="Svetlana's photo"/>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};