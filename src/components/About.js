import React from "react"
import styled from "styled-components"
import { Button } from "./button"

import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const About = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "aboutBg.jpg" }) {
          id
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED

              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(placeholderImage)

  return (
    <Container>
      <BgImage image={pluginImage} className="BrickBg" />
      <AboutContent>
        <h1>Our Story Started...</h1>
        <p>
          Legend has it that in the early 1600s, James William Loin started the
          very first steakhouse in Warwick, England. News of this magnificent
          establishment travelled across the land, with tales recounting details
          of the most succulent tender aged steaks, crunchy beer battered fries
          and beer mugs overflowing with crisp golden Ales. Hearing the news,
          King James I immediately set off on a perilous journey to discover
          this for himself. Upon finishing a lavish banquet, the King sent for
          James Loin and knighted him “Arise, Sir Loin”.
        </p>
        <p>
          Today we carry on with this tradition, using only the freshest
          ingredients to bring you the finest meals, still fit for a King.
        </p>
      </AboutContent>
    </Container>
  )
}

const Container = styled.section`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px red;

  .BrickBg {
    width: 100%;
    min-height: 70vh;
    display: flex;
    align-items: center;
    text-align: center;
  }
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 5;

  h1 {
    text-align: center;
    max-width: 100%;
    margin-top: 1vh;
    margin-bottom: 2vh;
    outline: solid 2px red; //red border: ;
    font-size: clamp(3rem, 5vw, 6rem);
    font-weight: 600;
  }
  p {
    justify-content: center;
    text-align: justify;
    margin-top: 0.7rem;
    padding: 0 3rem;
    font-size: clamp(1.2rem, 1.5vw, 3rem);
    font-weight: 600;
    color: #000;
  }
`

export default About
