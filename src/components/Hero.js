import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

// This is the updated way that Gatsby shows using just the gbimage-bridge
// and getImage function.
//The BgImage has a className="masthead" that can be styled

const Hero = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "heroBg.jpg" }) {
          id
          childImageSharp {
            gatsbyImageData(
              width: 1920
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
    <>
      <HeroContainer>
        <BgImage image={pluginImage} className="masthead">
          <h1>Test234</h1>
        </BgImage>
      </HeroContainer>
    </>
  )
}

const HeroContainer = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  .masthead {
    width: 100%;
    min-height: 100vh;
  }
`

export default Hero
