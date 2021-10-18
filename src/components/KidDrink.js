import React from "react"
import DrinkData from "../data/KidDrink.json"
import MenuItems from "../components/MenuItems"

const KidDrink = () => {
  return <MenuItems MenuData={DrinkData} />
}

export default KidDrink
