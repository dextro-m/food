import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

/*
export const useTrips = () => {
  const data = useStaticQuery(
    graphql`
      query Trips {
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
    `
  )
  // return data.allTripsJson.edges.node

  return data.allTripsJson.edges.node
}

*/
