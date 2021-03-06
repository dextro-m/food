import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styled from "styled-components"
//import { LunchData } from "../data/LunchData"
import LunchMenu from "./MenuLunch"
import DinnerSteak from "./DinnerSteak"
import DinnerEntree from "./DinnerEntree"
import DinnerSides from "./DinnerSides"
import DinnerStart from "./DinnerStart"
import DinnerSpecial from "./DinnerSpecial"
import WineRed from "./WineRed"
import WineWhite from "./WineWhite"
import BeerCraft from "./BeerCraft"
import BeerNormal from "./BeerNormal"
import DessertSweet from "./DessertSweet"
import DessertOther from "./DessertOther"
import KidMeal from "./KidMeal"
import KidDessert from "./KidDessert"
import KidDrink from "./KidDrink"

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
          <Tab>Dessert</Tab>
          <Tab>Kids</Tab>
        </TabList>
        <TabPanel>
          <LunchMenu />
          <h2>Any Content 1</h2>
        </TabPanel>
        <TabPanel>
          <Wrapper>
            <DinnerStart />
            <DinnerEntree />
            <DinnerSteak />
            <DinnerSpecial />
            <DinnerSides />
          </Wrapper>
        </TabPanel>
        <TabPanel>
          <Wrapper>
            <WineRed />
            <WineWhite />
          </Wrapper>
        </TabPanel>
        <TabPanel>
          <Wrapper>
            <BeerNormal />
            <BeerCraft />
          </Wrapper>
        </TabPanel>
        <TabPanel>
          <Wrapper>
            <DessertSweet />
            <DessertOther />
          </Wrapper>
        </TabPanel>
        <TabPanel>
          <Wrapper>
            <KidMeal />
            <KidDessert />
            <KidDrink />
          </Wrapper>
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

  //color: blue;
  h2 {
    //color: blue;
  }
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

export default Menu
