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
        <div key={edge.id}>{edge.node.name}</div>
      ))}
    </>
  )
}

export default Doggy
