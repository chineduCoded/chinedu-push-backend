import { Divider, Icon, Logo, Mode, ModeLabel, ModeToggler, NavContainer, NavItem, NavList, Sidebar, SidebarButton, SignOut, SignOutButton, SignOutLabel, ToggleThumb } from './SidebarElements'
import { FaArrowLeft, FaCalendarAlt, FaCog, FaFileAlt, FaHome, FaProjectDiagram, FaSignOutAlt } from "react-icons/fa"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useDarkMode } from '../../darkModeContext/ThemeContextMode'

const SidebarScreen = () => {
    const { darkMode, toggleTheme } = useDarkMode()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { pathname } = useLocation()

    const handleIsOpen = () => {
        setSidebarOpen((p) => !p)
    }
  return (
    <Sidebar isOpen={sidebarOpen}>
        <>
            <SidebarButton isOpen={sidebarOpen} onClick={handleIsOpen} >
                <FaArrowLeft />
            </SidebarButton>
        </>
        <Logo to={"/"}>
            {sidebarOpen ? <h1>Elijah C.</h1> : <h1>EC</h1>}
        </Logo>
        <Divider />
        {linkData.map(({id, icon, label, to}) => (
        <NavContainer key={id}  isActive={pathname === to}>
            <NavList to={to} style={!sidebarOpen ? {width: `fit-content`} : {}}>
                <Icon>
                    {icon}
                </Icon>
                <NavItem>{label}</NavItem>
            </NavList>
        </NavContainer> 
        ))}
        <Divider />
        <SignOut>
            {sidebarOpen && <SignOutLabel>Logout</SignOutLabel>}
            <SignOutButton>
                <FaSignOutAlt />
            </SignOutButton>
        </SignOut>  
        <Divider />
        <Mode>
            {sidebarOpen && <ModeLabel>Dark Mode</ModeLabel>}
            <ModeToggler 
            isActive={darkMode === true}
            onClick={() => toggleTheme() }>
                <ToggleThumb style={ darkMode === true ? {right : "1px"} : {}} />
            </ModeToggler>
        </Mode>
    </Sidebar>
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

export default SidebarScreen