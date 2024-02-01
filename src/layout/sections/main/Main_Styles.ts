import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"

const Main = styled.section`
  display: flex;
  min-height: 100vh;

  div {
    text-align: left;
  }
`

const Photo = styled.img`
  margin-right: 20px;
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media ${theme.breakpoints.mobile} {
    width: 310px;
    height: 380px;
  }
`

const MainTitle = styled.h1`
  ${font({weight: 400, Fmax: 27, Fmin: 20})};

  p {
    display: none;
  }
`

const Name = styled.h2`
  margin: 10px 0;
  ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 50, Fmin: 36})}
  letter-spacing: 0.05em;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

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

  @media ${theme.breakpoints.mobile} {
    margin: 15px 0 22px;
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

    @media ${theme.breakpoints.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }

  @media ${theme.breakpoints.mobile} {
    margin-top: 65px;
  }
`

export const S = {
  Main,
  PhotoWrapper,
  Photo,
  MainTitle,
  Name,
  SmallText
}