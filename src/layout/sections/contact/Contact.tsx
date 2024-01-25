import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={"name"}/>
          <Field placeholder={"subject"}/>
          <Field placeholder={"text"} as={"textarea"}/>
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`

`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  max-width: 540px;
  width: 100%;

  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  padding: 7px 15px;
  border: 1px solid ${theme.colors.borderCOlor};
  background-color: ${theme.colors.secondaryBg};
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.font};
  letter-spacing: 0.05em;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${theme.colors.placeholderColor};
    letter-spacing: 0.05em;
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderCOlor};
  }
`