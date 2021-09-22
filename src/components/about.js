import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

//    <Link to="/">Go back to the homepage</Link>

const About = () => {
  return (
    <Container>
      <h1>Our Story Started...</h1>
      <p>
        Legend has it, that in the early 1600s William John Loin started the
        very first steakhouse in Warwick, England. News of this magnificent
        establishment travelled across England and Europe. King James I
        dispatched his most loyal messenger to investigate. Upon his return, he
        recounted details of the most succulent tender aged steaks, crunchy beer
        battered fries and hefty mugs overflowing with crisp golden Ales. The
        King immediately set off on a perilous journey to discover this for
        himself. Upon finishing a lavish banquet, the King sent for William and
        knighted him “Arise, Sir Loin”. Today we carry on with this tradition,
        using only the freshest ingredients to bring you the finest meals, still
        fit for a King.
      </p>
    </Container>
  )
}

const Container = styled.section`
  height: calc(50vh);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  border: solid 2px red;

  @media (min-width: 800px) {
    max-width: 1024px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  h1 {
    text-align: center;
    max-width: 100%;
    margin-top: 6.5vh;
    outline: solid 2px red; //red border: ;
    font-size: clamp(3rem, 5vw, 6rem);
    font-weight: 600;
  }
  p {
    justify-content: center;
    text-align: justify;
    padding: 0 3rem;
  }
`

export default About
