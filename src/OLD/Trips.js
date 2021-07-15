/* 

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useTripsData } from "../hooks/useTripsData"

//To use gatsby image make .json file
//to export via graphql

const Trips = () => {
  const data = useStaticQuery(graphql`
    query {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            id
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
  console.log({ data }) //check the data

  //  const tripsData = data.allTripsJson.edges.node not working
  // const { alt, name } = useTrips() doesn't work

  function getTrips(data) {   //This will render the names of all trips
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(<div key={index}>{item.node.name}</div>)
    })
    return tripsArray
  }

  return (
    <ProductContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
      {data.allTripsJson.edges.map(edge => (    //This will render the names of all trips and trip id
        <div key={edge.node.id}>
          {edge.node.name}
          {edge.node.id}
        </div>
      ))}
    </ProductContainer>
  )
}

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

*/
