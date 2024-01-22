import { styled } from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
          <Name>@ivan ivanow</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  border: 1px solid red;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`

`

const Pagination = styled.div`
  span {
    display: inline-block;
    margin: 5px;
    width: 20px;
    height: 20px;
    background-color: #d546fd;
  }
`