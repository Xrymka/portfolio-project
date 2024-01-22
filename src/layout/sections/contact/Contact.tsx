import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={"name"}/>
        <Field placeholder={"subject"}/>
        <Field placeholder={"text"} as={"textarea"}/>
        <Button type={"submit"}>Send message</Button>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background-color: #cfc3a8;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
`

const Field = styled.input`

`