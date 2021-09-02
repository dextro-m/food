import React from "react"

import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

// This is the initial way that Gatsby uses the gatsby-background-image
// plugin. There is no styling so the background image is only across the
// top of the screen and the height is the same as the children eg the text
// height of "Test test"

const GbiBridged = () => {
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

  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
      <h1>Test test</h1>
    </BackgroundImage>
  )
}

export default GbiBridged
