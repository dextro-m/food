import React from "react"
import DessertData from "../data/KidDessert.json"
import MenuItems from "../components/MenuItems"

const KidDessert = () => {
  return <MenuItems MenuData={DessertData} />
}

export default KidDessert
