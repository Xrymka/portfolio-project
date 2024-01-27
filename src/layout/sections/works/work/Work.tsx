import { styled } from "styled-components";
import { Link } from "../../../../components/Link";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title: string
  text: string
  src: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt=""/>
        <Button>View Project</Button>
      </ImageWrapper>
      <Direction>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>code</Link>
      </Direction>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  flex-grow: 1;
  width: 330px;
  background-color: ${theme.colors.secondaryBg};

  ${Link} {
    padding-right: 0;
    padding-left: 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${theme.breakpoints.desktop} {
    max-width: 540px;
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
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity ${theme.animation.transDefault};

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

const Direction = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0 10px;
`