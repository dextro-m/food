import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { StaticImage } from "gatsby-plugin-image"

//This component

const Hero = () => {
  return (
    <Container>
      <FlexHeading>
        <Heading>Coming Soon...</Heading>
      </FlexHeading>

      <FlexImage>
        <StaticImage
          src="../images/under.png"
          alt="Under Construction"
          layout="constrained"
        />
      </FlexImage>
      <FlexText>
        <Text>
          Website currently undergoing maintenance
          <br />
          Please check back later!
        </Text>
        <ContactBtn href="mailto:info@megnel.com">Contact Us</ContactBtn>
      </FlexText>
    </Container>
  )
}

const Container = styled.section`
  height: calc(100vh - 140px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  //border: solid 2px red;

  @media (min-width: 800px) {
    max-width: 1024px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

const FlexHeading = styled.div`
  text-align: center;
  max-width: 100%;
  margin-top: 6.5vh;
  //outline: solid 2px red; //red border: ;
  @media (min-width: 800px) {
    min-width: 80%;
    margin-top: 5vh;
  }
`
const FlexImage = styled.div`
  margin-top: 5vh;
  max-width: 50%;
  //outline: solid 2px red;

  @media (min-width: 800px) {
    max-width: 28%;
    margin-top: -6vh;
    order: 3; //move to RH side of screen
  }
`
const FlexText = styled.div`
  text-align: center;
  max-width: 100%;
  margin-top: 6vh;

  //outline: solid 2px red; //red border: ;

  @media (min-width: 800px) {
    max-width: 65%;
    margin-top: -4vh;
  }
`

const Heading = styled.h1`
  font-size: clamp(3rem, 5.4vw, 6.5rem);
  font-weight: 600;
`

const Text = styled.p`
  font-size: clamp(1.1rem, 3.1vw, 2.1rem);
  line-height: 1.5; //adds space inbetween text lines
  white-space: no-wrap;
`
const ContactBtn = styled(Button)`
  position: relative;
  top: 15px;
  @media (min-width: 700px) {
    padding: 0.7em 1.5em;
    font-size: 1.3rem;
  }
`

export default Hero
