import React from "react"
import SweetData from "../data/DessertSweet.json"
import MenuItems from "../components/MenuItems"

const DessertSweet = () => {
  return <MenuItems MenuData={SweetData} />
}

export default DessertSweet
