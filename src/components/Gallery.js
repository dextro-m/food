import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

// Required for React Bootstrap Carousel, but it's
// better to include it in the layout component
//import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"

const Gallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: { relativeDirectory: { eq: "food" } }
          sort: { fields: base, order: ASC }
        ) {
          edges {
            node {
              id
              base
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  blurredOptions: { width: 100 }
                  transformOptions: { cropFocus: CENTER, fit: COVER }
                )
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <h1>Test</h1>

      <Carousel>
        {data.allFile.edges.map(({ node }) => (
          <Carousel.Item key={node.id}>
            <FoodImage
              image={getImage(node)}
              alt={node.base.substring(1).split(".")[0]}
            />
          </Carousel.Item>
          // .substring(1) removes the 1st character of the
          // image file name .split(".")[0] remove the . and jpg
          //<p>{node.base.substring(1).split(".")[0]}</p>
        ))}
      </Carousel>
    </Container>
  )
}

export default Gallery

const Container = styled.div`
  width: 100%auto;
  min-height: 50vh;
  //display: flex;
`

const FoodImage = styled(GatsbyImage)`
  max-height: 50vh;
`
