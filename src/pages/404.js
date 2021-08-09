import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import "@fontsource/jetbrains-mono"
import { Link } from "gatsby"
import { DiAndroid } from "react-icons/di"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <FlexHeading>
        <Heading>404: ERROR</Heading>
        <Droid />
        <Text>
          This is not the page you are looking for.
          <br />
          <br />
          Move along, &nbsp;
          <br />
          Move along...
          <br />
          <HomeLink to="/">Ok, I'll move along {">>>"}</HomeLink>
        </Text>
      </FlexHeading>
    </Container>
  </Layout>
)

const Container = styled.section`
  height: calc(100vh - 140px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  //border: solid 2px red;

  @media (min-width: 800px) {
    max-width: 1024px;
    flex-wrap: wrap;
  }
`

const FlexHeading = styled.div`
  text-align: center;
  max-width: 100%;
  margin-top: 6.5vh;
  //outline: solid 2px red; //red border: ;
  @media (min-width: 800px) {
    min-width: 80%;
    margin-top: 5vh;
  }
`

const Droid = styled(DiAndroid)`
  display: block;
  font-size: clamp(2.5rem, 5.4vw, 6.5rem);
  margin: 1.3rem auto;
`

const FlexText = styled.div`
  text-align: center;
  max-width: 100%;
  margin-top: 1vh;
  //outline: solid 2px red; //red border: ;
  @media (min-width: 800px) {
    max-width: 65%;
    margin-top: -4vh;
  }
`

const Heading = styled.h1`
  //font-family: "JetBrains mono";
  font-size: clamp(3rem, 5.4vw, 6.5rem);
  font-weight: 600;
  margin-bottom: 1.2vh;
`

const Text = styled.p`
  font-family: "JetBrains mono";
  font-size: clamp(1.1rem, 3.1vw, 2.1rem);
  line-height: 1.5; //adds space inbetween text lines
  //white-space: no-wrap;
  margin-top: 2vh;
`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #024a7b;
  font-size: clamp(1.1rem, 3.3vw, 1.8rem);
  display: inline-block; //for margins to work
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s !important; //the other animations were over writting this @42:53 video
  border-radius: 50px;
  padding: 0.4rem 1rem;
  margin-top: 3em;

  &:hover {
    background: #273e5e;
    transform: translateY(-2px); //makes it move just a bit
  }
`

export default NotFoundPage
