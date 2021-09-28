import React from "react"
import styled from "styled-components"
import { LunchData } from "../data/LunchData"

const LunchMenu = () => {
  return (
    <Wrapper>
      {LunchData.map((item, index) => {
        return (
          <LunchBox key={index}>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Price>{item.price}</Price>
          </LunchBox>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const LunchBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`
const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0%.5rem;
`

const Description = styled.p``
const Price = styled.p``

export default LunchMenu
