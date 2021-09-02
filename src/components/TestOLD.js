import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Test = () => {
  const data = useStaticQuery(graphql`
    query {
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

  console.log({ data })

  return (
    <Container>
      <Heading>Test</Heading>
      {/*
      {data.allFile.edges.map(({ node }) => (
        <div key={node.id}>
          <GatsbyImage image={getImage(node)} alt="pic" />
        </div>
      ))}
      */}

      <h1>{data.allFile.edges.node}</h1>
    </Container>
  )
}

export default Test

const Container = styled.div`
  z-index: 1;
  min-height: 50vh;
  background: #5e5e5e;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Heading = styled.h1`
  color: #000;
`
