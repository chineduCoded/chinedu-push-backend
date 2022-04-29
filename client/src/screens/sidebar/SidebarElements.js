import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { device } from "../../styles/devices"
import { v, btnReset } from "../../styles/variables"

export const Sidebar = styled.div`
    display: none;

   @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: ${({isOpen}) => !isOpen ? `80px` : v.sidebarWidth};
    // flex: 2;
    padding: ${v.mdSpacing};
    min-height: 100vh;
    background: ${({theme}) => theme.bg};
    transition: 350ms ease-in width;

    position: relative;
   }
`

export const SidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({isOpen}) => isOpen ? `-16px` : `-16px`};
    cursor: pointer;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${({theme}) => theme.bg};
    box-shadow: 0 0 4px ${({theme}) => theme.bg3}, 0 0 7px ${({theme}) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;

    transform: ${({isOpen}) => (!isOpen ? `rotate(180deg)` : `initial`)};
`

export const Logo = styled(Link)`
    margin: 30px 0;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
`
export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({theme}) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`
export const NavContainer = styled.div`
    background: ${({theme, isActive}) => !isActive ? `transparent` : theme.bg3};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    overflow: hidden;

    &:hover {
        box-shadow: inset 0 0 0 1px ${({theme}) => theme.bg3};
    }
    

`
export const NavList = styled(NavLink)`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
    color: inherit;

`
export const Icon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};

    svg {
        font-size: 20px;
        color: teal;
        display: flex;
        justify-content: center;
        align-items: center;
    }
   

`
export const NavItem = styled.div`
    margin-left: ${v.smSpacing};
    font-weight: bold;
    
`
export const Mode = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    justify-content: center;
`
export const ModeLabel = styled.span`
    display: block;
    flex: 1;
`
export const ModeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: ${v.borderRadius};
    background: ${({theme, isActive}) => isActive ? theme.bg3 : "teal"};
    position: relative;

`
export const ToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: .2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({theme}) => theme.bg};
`

export const SignOut = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
`
export const SignOutLabel = styled.span`
    display: block;
    flex: 1;
`
export const SignOutButton = styled.button`
    ${btnReset};
    cursor: pointer;

    svg {
        font-size: 20px;
        color: teal;
    }
`