import { styled } from 'styled-components';
import main from '../../../../asserts/images/main.jpg'
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
            <span>Hi there</span>
            <Name>I am Svetlana Dyablo</Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>

          <Photo src={main} alt="Svetlana's photo"/>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #ffffe0;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1`
  font-size: 20px;
`

const Name = styled.h2`
  font-size: 30px;
`