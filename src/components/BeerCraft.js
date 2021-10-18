import React from "react"
import CraftData from "../data/BeerCraft.json"
import MenuItems from "../components/MenuItems"

const BeerCraft = () => {
  return <MenuItems MenuData={CraftData} />
}

export default BeerCraft
