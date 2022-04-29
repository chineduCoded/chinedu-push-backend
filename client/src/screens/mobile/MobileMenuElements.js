import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";
import { device } from "../../styles/devices"

export const Mobile = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    // bottom: 0;
    z-index: 10;
    background: ${({theme}) => theme.bg};
    transition: 350ms ease-in-out top;

    @media ${device.tablet} {
        display: none;
    }
   
`
export const CloseIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;

    svg {
        font-size: 20px;
    }
`

export const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    backrground: ${({theme}) => theme.bg};
    padding-top: 60px;
`

export const NavContainer = styled.div`
    background: transparent;
    margin: 6px 0;
    display: flex;
    transition: all 35oms ease;
    border-radius: ${v.borderRadius};

    &:hover {
        box-shadow: inset 0 0 0 1px ${({theme}) => theme.bg3};
    }
`

export const NavList = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    padding: ${v.mdSpacing};
    color: inherit;
`
export const NavIcon = styled.div`

    svg {
        font-size: 20px;
        color: teal;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const NavLabel = styled.div`
    font-weight: bold;
    margin-left: 15px;
`
export const LogoutHolder = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`
export const Logoutlabel = styled.div`
    display: block;
    flex: 1;
    font-weight: bold;
`
export const LogoutButton = styled.div`
    cursor: pointer;

    svg {
        font-size: 20px;
    }
`

export const DarkModeToggler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToggleLabel = styled.div`
    display: block;
    flex: 1;
    font-weight: bold;
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