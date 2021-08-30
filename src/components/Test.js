import React from "react"
import styled from "styled-components"

const Test = () => {
  return (
    <Container>
      <Heading>Test</Heading>
      <Heading>See me now?</Heading>
    </Container>
  )
}

export default Test

const Container = styled.div`
  z-index: 1;
  min-height: 80vh;
  background: #5e5e5e;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Heading = styled.h1`
  color: #000;
`
