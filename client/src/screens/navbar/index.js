import { useRef, useState } from "react"
import { FaBars, FaSearch, FaMoon, FaSun } from "react-icons/fa"
import { MdOutlineNotificationsNone } from "react-icons/md"
import { BsChatRightFill } from "react-icons/bs"
import { IconWrapper, MenuIcon, NavbarContainer, NavbarRight, SearchInput, SearchWrapper, ImageContainer } from "./NavbarElements"
import { useDarkMode } from "../../darkModeContext/ThemeContextMode"
import { avatarPNG } from "../../assets"
import MobileMenu from "../mobile"

const Navbar = () => {
  const searchRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [toggle, setToggle] = useState(false)

  const { darkMode, toggleTheme } = useDarkMode()

  const searchClickHandler = () => {
    if(!isOpen) {
      setIsOpen(true)
      // focus on input
      searchRef.current.focus()
     
    } else {
      // search functionality
    }
  }

  const handleToggle =() => {
    setToggle((toggle) => !toggle)
    console.log(toggle)
  }
  return (
    <NavbarContainer>
        <NavbarRight>
          <MenuIcon toggle={toggle} onClick={() => handleToggle()}>
            <FaBars />
          </MenuIcon>
          <SearchWrapper onClick={searchClickHandler}>
            <SearchInput ref={searchRef} placeholder="search..." isActive={isOpen} />
            <FaSearch />
          </SearchWrapper>
        </NavbarRight>
        {toggle ? <MobileMenu isToggled={setToggle} /> : ""}
        <IconWrapper onClick={() => toggleTheme()}>
          {darkMode === true ? <FaSun /> : <FaMoon />}
        </IconWrapper>
        <IconWrapper>
          <MdOutlineNotificationsNone />
          <div className="counter">4</div>
        </IconWrapper>
        <IconWrapper>
          <BsChatRightFill />
          <div className="counter">3</div>
        </IconWrapper>
        <ImageContainer>
          <img src={avatarPNG} alt=""/>
        </ImageContainer>
    </NavbarContainer>
  )
}

export default Navbar