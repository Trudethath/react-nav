import React, { useState } from 'react'
import MenuItems from './MenuItems'
import { GiBoar, GiHamburgerMenu } from 'react-icons/gi'
import { FiXCircle } from 'react-icons/fi'

const Navbar = () => {
  const [isClicked, setClicked] = useState('false')
  const [activeElement, setActiveElement] = useState('Home')

  const handleActiveElement = (element) => {
    setActiveElement(element)
  }

  const handleClick = () => {
    const menu = document.querySelector('.menu')
    console.log(menu)
    menu.classList.toggle('active')
    setClicked(!isClicked)
  }
  const menuItems = MenuItems.map((item, index) => {
    return (
      <li key={index}>
        <a
          className={`${item.cName} ${
            activeElement === item.title ? 'activeElement' : null
          }`}
          href={item.url}
          onClick={() => handleActiveElement(item.title)}
        >
          {item.title}
        </a>
      </li>
    )
  })

  return (
    <>
      <nav className="navbarItems">
        <div className="left">
          <h1 className="navbarLogo">
            Boar
            <i>
              <GiBoar />
            </i>
          </h1>
        </div>

        <div className="right">
          <input type="text" placeholder="type something.." />
          {isClicked ? (
            <i className="hamburger" onClick={handleClick}>
              <GiHamburgerMenu />
            </i>
          ) : (
            <i className="hamburger" onClick={handleClick}>
              <FiXCircle />
            </i>
          )}
          <ul className="menu">{menuItems}</ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
