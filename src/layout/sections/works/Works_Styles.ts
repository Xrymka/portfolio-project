import styled from "styled-components"
import { Button } from "../../../components/Button"
import { Link } from "../../../components/Link"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"

const Works = styled.section`
  position: relative;

  ${FlexWrapper} {
    justify-content: center;
  }
`

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  height: 260px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    transition: background ${theme.animation.transDefault}, backdrop-filter ${theme.animation.transDefault};
  }

  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    opacity: 0;
    transition: transform ${theme.animation.transDefault}, opacity ${theme.animation.transDefault};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    &::before {
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }

  @media ${theme.breakpoints.tablet} {
    &::before {
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0 12px;
`

export const S = {
  Works,
  Work,
  ImageWrapper,
  Image,
  Description,
  Title,
  Text
}