import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Contact = styled.section`
  position: relative;
`

const Form = styled.form`
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

export const S = {
  Contact,
  Form,
  Field
}