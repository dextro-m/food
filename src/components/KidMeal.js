import React from "react"
import MealData from "../data/KidMeal.json"
import MenuItems from "../components/MenuItems"

const KidMeal = () => {
  return <MenuItems MenuData={MealData} />
}

export default KidMeal
