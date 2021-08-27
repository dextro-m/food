import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <NavBar>
      <NavLink to="/">
        <StaticImage
          src="../images/logo.png"
          alt="Under Construction"
          layout="constrained"
        />
      </NavLink>
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: transparent;
  max-width: 1024px;
  height: 90px;
  z-index: 1;
  //border: solid 2px blue;
`

const NavLink = styled(Link)`
  //text-decoration: none;
  padding: 0 1rem;
  max-width: 180px; //increase or decrease Logo size
  cursor: pointer;
  z-index: 1;
`

export default Header
