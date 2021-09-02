import React from "react"
import styled from "styled-components"
import { Button } from "./button"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//This component forms the main Hero section

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: "heroBg" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
            id
          }
        }
      }
    }
  `)

  //console.log(data.allFile.edges.node.id)

  //const image = getImage(data.allFile.edges.node)

  return (
    <Container>
      <HeroBg>
        <GatsbyImage image={data.allFile.edges.node} alt="Nothing" />
      </HeroBg>
      <FlexHeading>
        <Heading>Sir Loin</Heading>
        <h2>EST 1607</h2>
      </FlexHeading>

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
  height: 100vh;
  //overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;

  //border: solid 2px red;

  //This is overlay over image to darken it
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 100vh;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media (min-width: 800px) {
    max-width: 1024px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  z-index: 0;
  border: solid 2px red;
`

const BgImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  z-index: 50;
`

const FlexHeading = styled.div`
  text-align: center;
  max-width: 100%;
  margin-top: 6.5vh;
  z-index: 1;
  //outline: solid 2px red; //red border: ;
  @media (min-width: 800px) {
    min-width: 80%;
    margin-top: 5vh;
  }
`

const FlexText = styled.div`
  text-align: center;
  max-width: 100%;
  margin-top: 6vh;
  z-index: 1;

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
