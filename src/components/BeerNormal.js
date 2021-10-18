import React from "react"
import NormalData from "../data/BeerNormal.json"
import MenuItems from "../components/MenuItems"

const BeerNormal = () => {
  return <MenuItems MenuData={NormalData} />
}

export default BeerNormal
