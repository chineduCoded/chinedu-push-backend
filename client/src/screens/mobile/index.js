import React from 'react'
import { FaCalendarAlt, FaCog, FaFileAlt, FaHome, FaProjectDiagram, FaSignOutAlt, FaTimes } from 'react-icons/fa'
import { DarkModeToggler, LogoutButton, LogoutHolder, Logoutlabel, MobileContainer, ModeToggler, NavContainer, NavIcon, NavLabel, NavList, ToggleLabel, ToggleThumb, Mobile, CloseIcon } from './MobileMenuElements'
import { useDarkMode } from "../../darkModeContext/ThemeContextMode"

const MobileMenu = ({ toggle, isToggled }) => {
 const { darkMode, toggleTheme } = useDarkMode()

 const handleToggle = () =>{
     isToggled((toggle) => !toggle)
 }
  return (
   <Mobile isActive={toggle}>
        <MobileContainer>
        <CloseIcon onClick={handleToggle}>
           <FaTimes />
       </CloseIcon>
        {linkData.map(({id, icon, label, to}) => (
            <NavContainer key={id}>
                <NavList to={to} onClick={handleToggle}>
                    <NavIcon>{icon}</NavIcon>
                    <NavLabel>{label}</NavLabel>
                </NavList>
            </NavContainer>
        ))}
        <LogoutHolder>
            <Logoutlabel>Logout</Logoutlabel>
            <LogoutButton onClick={handleToggle}>
                <FaSignOutAlt />
            </LogoutButton>
        </LogoutHolder>
        <DarkModeToggler>
            <ToggleLabel>Dark Mode</ToggleLabel>
            <ModeToggler
            isActive={darkMode === true}
            onClick={() => toggleTheme() }
            >
                <ToggleThumb onClick={handleToggle} style={ darkMode === true ? {right : "1px"} : {}} />
            </ModeToggler>
        </DarkModeToggler>
        </MobileContainer>
   </Mobile>
  )
}

const linkData = [
    {
        id: 1,
        icon: <FaHome />,
        label: "Home",
        to: "/"
    },
    {
        id: 2,
        icon: <FaCalendarAlt />,
        label: "Calendar",
        to: "calendar"
    },
    {
        id: 3,
        icon: <FaProjectDiagram />,
        label: "Projects",
        to: "projects"
    },
    {
        id: 4,
        icon: <FaFileAlt />,
        label: "Documents",
        to: "documents"
    },
    {
        id: 5,
        icon: <FaCog />,
        label: "Settings",
        to: "settings"
    },
]

export default MobileMenu