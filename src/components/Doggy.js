/*
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Doggy = () => {
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

  return (
    <>
      {data.allTripsJson.edges.map(edge => (
        <div key={edge.node.id}>
          {edge.node.name}
          {edge.node.id}
        </div>
      ))}
    </>
  )
}

export default Doggy

*/
