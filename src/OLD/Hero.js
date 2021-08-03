/*
import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <HeroContainer>
      <ContentBox>
        <Content1>
          <HeroH1>Coming Soon...</HeroH1>
          <HeroP>
            Website currently undergoing maintenance,
            <br />
            Please check back later!
          </HeroP>
          <Button primary="true" big="true" round="true" to="/trips">
            Contact Us
          </Button>
        </Content1>
        <Content2>
          <StaticImage
            src="../images/under3.png"
            alt="Under Construction"
            layout="constrained"
            width={450}
          />
        </Content2>
      </ContentBox>
    </HeroContainer>
  )
}


//The styling looks ok, but it's very unorganised,
//uses flexbox but then also grid-template

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0 1rem;
  position: relative;
  //margin-top: -80px; //cause header height is 80px
  color: #fff;
`

const ContentBox = styled.div`
  display: grid;
  //height: 100vh;
  grid-template-columns: 1.3fr 1fr;
  grid-template-areas: "cont1 cont2";
  //text-align: center;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 0.3fr;
    grid-template-areas:
      "cont2"
      "cont1";
  }
`

const Content1 = styled.div`
  display: flex;
  grid-area: cont1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  //max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  @media (max-width: 550px) {
    max-height: 40vh;
  }
`
const Content2 = styled.div`
  display: flex;
  grid-area: cont2;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  //height: 100%;

  padding: 0;
  color: #000;

  @media (max-width: 550px) {
    max-height: 40vh;
  }
`

const HeroH1 = styled.h1`
  font-size: clamp(1rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`

const HeroP = styled.p`
  font-size: clamp(0.5rem, 2vw, 2rem);
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.5; //adds space inbetween text lines
`

export default Hero
*/
