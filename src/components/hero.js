import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <Container>
      <FlexHeading>
        <Heading>Coming Soon...</Heading>
      </FlexHeading>

      <FlexImage>
        <StaticImage
          src="../images/under3.png"
          alt="Under Construction"
          layout="constrained"
          //width={450}
        />
      </FlexImage>
      <FlexText>
        <Text>Website currently undergoing maintenance</Text>
        <Text>Please check back later!</Text>
      </FlexText>
    </Container>
  )
}

const Container = styled.div`
  height: 80vh;
  //margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: solid 2px red;
  //flex-wrap: wrap;
  //align-items: center;
  /*
  border: solid 2px red;
  display: flex;
  height: 100vh;
  justify-content: space-around;
  //justify-content: center;
  align-items: center;
  //align-items: stetch; //is the default
  */

  @media (min-width: 768px) {
    max-width: 1024px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;

    //display: flex;
    //height: 100vh;
    //justify-content: space-around;
    //justify-content: center;
    //align-items: center;
    //align-items: stetch; //is the default
    //flex-wrap: wrap-reverse;
  }
`

const FlexHeading = styled.div`
  //max-height: 100vh;
  text-align: center;
  max-width: 100%;
  margin-top: 6.5vh;
  //min-height: 20vh;
  //max-width: 45%;
  //flex: 1;
  //text-align: center;
  //flex-basis: 50%; //sets the width
  //flex: 1 1 300px;
  outline: solid 2px red; //red border: ;
  //max-width: 45%;
  @media (min-width: 600px) {
    min-width: 80%;
    margin-top: 5vh;
  }
`
const FlexImage = styled.div`
  margin-top: 5vh;
  //flex: 1;
  //flex-basis: 50%;
  //max-height: 45vh;
  max-width: 50%;
  //flex: 1 1 300px;
  outline: solid 2px red;

  @media (min-width: 768px) {
    max-width: 28%;
    margin-top: -6vh;
    order: 3; //move to RH side of screen
  }
`
const FlexText = styled.div`
  text-align: center;
  max-width: 100%;
  margin-top: 6.5vh;
  //min-height: 20vh;
  //max-width: 45%;
  //flex: 1;
  //text-align: center;
  //flex-basis: 50%; //sets the width
  //flex: 1 1 300px;
  outline: solid 2px red; //red border: ;

  @media (min-width: 768px) {
    max-width: 65%;
    margin-top: -2vh;
  }
`

const Heading = styled.h1`
  font-size: clamp(3rem, 5.4vw, 6rem);
  font-weight: 600;
  //margin-bottom: 0.3em;
  // margin-bottom: 2rem;
  //letter-spacing: 3px;
  //padding: 0 1rem;
`

const Text = styled.p`
  font-size: clamp(1.1rem, 3.1vw, 2.1rem);
  line-height: 1.5; //adds space inbetween text lines
`

export default Hero

/*
<Button primary="true" big="true" round="true" to="/trips">
          Contact Us
        </Button>

        */
/*
const ContentBox = styled.div`
  /*
  border: solid 2px red;
  display: flex;
  height: 100vh;
  justify-content: space-around;
  //justify-content: center;
  align-items: center;
  //align-items: stetch; //is the default
  */

/*

  //flex-wrap: wrap;
  @media (min-width: 600px) {
    border: solid 2px red;
    display: flex;
    height: 100vh;
    justify-content: space-around;
    //justify-content: center;
    align-items: center;
    //align-items: stetch; //is the default
    //flex-wrap: wrap-reverse;
  }
`

const Content1 = styled.div`
  //flex: 1;
  //text-align: center;
  flex-basis: 50%; //sets the width
  border: solid 2px red; //red border

  @media (max-width: 600px) {
  }
`
const Content2 = styled.div`
  //flex: 1;
  flex-basis: 40%;
  border: solid 2px red;

  @media (max-width: 600px) {
    //flex-basis: 20%;
  }
`

*/
/* old Code

const ContentBox = styled.div`
  display: flex;

  //height: 100vh;
  //max-width: 700px;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    flex-wrap: wrap-reverse;
  }
`

const Content1 = styled.div`
  min-width: 60vw;
  height: 40vh;
  text-align: center;
  border: solid 2px red;

  @media (max-width: 550px) {
  }
`
const Content2 = styled.div`
  border: solid 2px red;
  min-width: 5vw;
  @media (max-width: 550px) {
    // max-width: 30vw;
  }
`
*/
