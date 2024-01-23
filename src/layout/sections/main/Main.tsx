import { styled } from 'styled-components';
import main from '../../../assets/images/main.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi there</SmallText>
            <Name>I am <span>Svetlana Dyablo</span></Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>

          <PhotoWrapper>
            <Photo src={main} alt="Svetlana's photo"/>
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;

  div {
    text-align: left;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const Name = styled.h2`
  margin: 10px 0;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: .05em;

  span {
    position: relative;
    z-index: 0;

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      z-index: -1;
    }
  }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    position: absolute;
    top: -24px;
    left: 24px;
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    z-index: -1;
  }
`