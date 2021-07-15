import { useStaticQuery, graphql } from "gatsby"

export const useTripsData = () => {
  const { allTripsJson } = useStaticQuery(
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

  return allTripsJson.edges.node
}
