/*
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

  //This function, getTrips(data), loops through the data and stores it in the tripsArray,
  // call the function {getTrips(data)} in the return section.
  //It achieves same result as the code in the return section mapping through the data

  function getTrips(data) {
    const tripsArray = []

    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <div key={index}>
          {item.node.name}
          <GatsbyImage image={getImage(item.node.img)} />
        </div>
      )
    })
    return tripsArray
  }

  return (
    <ProductContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>Wrapper{getTrips(data)}</ProductWrapper>
      {data.allTripsJson.edges.map(({ node }) => (
        <div key={node.id}>
          {node.name}
          {node.id}
          <GatsbyImage image={getImage(node.img)} />
        </div>
      ))}
    </ProductContainer>
  )
}

//This was the way i done it before, but can map through ({ node }) instead
/*
<ProductContainer>
<ProductsHeading>Heading</ProductsHeading>
<ProductWrapper>{getTrips(data)}</ProductWrapper>
{data.allTripsJson.edges.map(edge => (
  <div key={edge.node.id}>
    {edge.node.name}
    {edge.node.id}
  </div>
))}
<GatsbyImage image={image} />
</ProductContainer>



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

const ProductWrapper = styled.div``

export default Trips

*/
