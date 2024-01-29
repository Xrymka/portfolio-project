import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Slider = styled.div`
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
  display: inline-block;
  margin: 22px 0 32px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);

    & + span {
      margin-left: 5px;
    }

    &.active {
      width: 20px;
      background-color: ${theme.colors.accent};
    }
  }
`

export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination
}