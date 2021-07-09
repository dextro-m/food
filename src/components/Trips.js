import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//To use gatsby image make .json file
//to export via graphql

/* const Trips = () => {
  const data = useStaticQuery(graphql`
    query tripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)  */

/* 
const Trips = () => {
  const data = useStaticQuery(graphql`
    query tripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)  */

/* function getTrips({ data }) {
    const tripsArray = []
    const image = getImage(data.allTripsJson.edges.node.img)
    data.allTripsJson.edges.map((item, index) => {
      tripsArray.push(
        <div key={index}>
          <GatsbyImage
            image={data.allTripsJson.edges.node.img}
            alt={data.allTripsJson.edges.node.name}
          />
        </div>
      )
    })
    return tripsArray
  }
*/
// {getTrips(data)}

function Trips() {
  /*
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )


  {site.siteMetadata.title}
  */

  const data2 = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)

  //const footerData = data2.allTripsJson.edges.node.alt

  //const Trips = () => {
  console.log({ data2 })

  const getTripsList = () => {
    const tripList = []
    const trips = 0

    return tripList
  }

  return (
    <ProductContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>ProductWrapper </ProductWrapper>
    </ProductContainer>
  )
}

// {data.tripsJson.alt} doesnt work
// {data.allTripsJson.edges.node.alt}

const ProductContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #fff;
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductWrapper = styled.div``

export default Trips
