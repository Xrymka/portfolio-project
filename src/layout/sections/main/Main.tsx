import { S } from "./Main_Styles"
import main from "../../../assets/images/main.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';




export const Main: React.FC = () => {
  return (
    <S.Main id={"main"}>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} gap={"10px"}>
          <div>
            <S.SmallText>Hi there</S.SmallText>
            <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer.', 'A Web Designer.'],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </S.MainTitle>
          </div>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={main} alt="Svetlana's photo"/>
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};