import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styled from "styled-components"
//import { LunchData } from "../data/LunchData"
import LunchMenu from "./MenuLunch"

const Menu = () => {
  return (
    <Container>
      <h1>Menu</h1>
      <Tabs>
        <TabList>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
          <Tab>Wine</Tab>
          <Tab>Beer</Tab>
          <Tab>Desert</Tab>
          <Tab>Kids</Tab>
        </TabList>
        <TabPanel>
          <LunchMenu />
          <h2>Any Content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any Content 2</h2>
        </TabPanel>
      </Tabs>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px red;
`
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

export default Menu
