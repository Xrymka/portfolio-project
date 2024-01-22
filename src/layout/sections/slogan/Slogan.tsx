import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I&nbsp;Am Available For Freelance</SectionTitle>
      <Button type={"button"}>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  background-color: #dac678;
`