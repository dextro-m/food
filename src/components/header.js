import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <NavBar>
      <NavLink to="/">
        <StaticImage
          src="../images/logo3.png"
          alt="Under Construction"
          layout="constrained"
          //width="160px"
        />
      </NavLink>
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  //justify-items: center;
  background: transparent;
  max-width: 1024px;

  height: 100px;
  display: flex;
  //padding: 0.75rem 0.25rem;
  border: solid 2px blue;
`

const NavLink = styled(Link)`
  //display: flex;
  //align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  max-width: 180px; //increase or decrease Logo size
  cursor: pointer;
`

/* const Bars = styled(FaBars)`
  display: none; //hide on desktop view
  color: #fff;

  @media (max-width: 768px) {
    display: block; //show on smaller screen
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
` */

export default Header
