import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

// This is the updated way that Gatsby shows using just the gbimage-bridge
// and getImage function.
//The BgImage has a className="masthead" that can be styled

const Herobg = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "heroBg.jpg" }) {
          id
          childImageSharp {
            gatsbyImageData(
              width: 1920
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(placeholderImage)

  return (
    <>
      <HeroContainer>
        <BgImage image={pluginImage} className="masthead" />
        <HeroContent>
          <h1>Sir Loin</h1>
          <h2>Steakhouse</h2>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

const HeroContainer = styled.section`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  //z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  //This is overlay over image to darken it
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 100vh;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  .masthead {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;

    h1 {
      text-align: center;
      color: white;
    }
  }
`

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  position: absolute;

  z-index: 5;
`

export default Herobg

/* 
// This way does not work properly, the "Hello" was still covered 
// by the grey overlay, z-index: 50 did not work.

<>
<HeroContainer>
  <BgImage image={pluginImage} className="masthead">
    <HeroContent>
      <h1>Hello</h1>
    </HeroContent>
  </BgImage>
</HeroContainer>
</>


// The solution is to not wrap the HeroContent with the BGImage.
<>
      <HeroContainer>
        <BgImage image={pluginImage} className="masthead" />
        <HeroContent>
          <h1>Hello</h1>
        </HeroContent>
      </HeroContainer>
    </>

*/
