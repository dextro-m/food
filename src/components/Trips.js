import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "./button"
import { ImLocation } from "react-icons/im"

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
  console.log({ data }) //check the data on console

  //This function, getTrips(data), loops through the data and stores it in the tripsArray,
  // call the function {getTrips(data)} in the return section.

  function getTrips(data) {
    const tripsArray = []

    data.allTripsJson.edges.forEach(({ node }) => {
      tripsArray.push(
        <ProductCard key={node.id}>
          {node.name}
          <GatsbyImage image={getImage(node.img)} alt={node.alt} />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{node.name}</ProductTitle>
            </TextWrap>
            <Button to="/trips">{node.button}</Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <ProductContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductContainer>
  )
}

//This was the way I was doing it before, but now using getTrips function
/*
      <ProductWrapper>Wrapper{getTrips(data)}</ProductWrapper>
      {data.allTripsJson.edges.map(({ node }) => (
        <div key={node.id}>
          {node.name}
          {node.id}
          <GatsbyImage image={getImage(node.img)} />
        </div>
      ))}
    </ProductContainer>

*/

// This is the styling  for the component using 'styled components'
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

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const ProductCard = styled.div``

const ProductInfo = styled.div``

const TextWrap = styled.div``

const ProductTitle = styled.div``

export default Trips
