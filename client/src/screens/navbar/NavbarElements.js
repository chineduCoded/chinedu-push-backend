import styled from "styled-components"
import { device } from "../../styles/devices"

export const NavbarContainer = styled.div`
    padding: 24px 15px;
    position: relative;

    @media ${device.tablet} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 40px;
        border-bottom: 1px solid ${({theme}) => theme.bg3};
    }
`
export const NavbarRight = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.tablet} {
        display: flex;
        align-items: center;
    }
`

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${({theme}) => theme.bg3};
    border-radius: 6px;
    padding: 12px;
    margin-left: 20px;

    @media ${device.tablet} {
        margin: 0;
    }
`
export const SearchInput = styled.input`    
width: 100%;
background: transparent;
border: none;
outline: none;
color: inherit;
font-size: 14px;

`
export const IconWrapper = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
    @media ${device.tablet} {
        cursor: pointer;
        margin-left: 20px;
        color: inherit;
        svg {
            font-size: 25px;
        }
        position: relative;

        .counter {
            position: absolute;
            top: -10px;
            right: -8px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: red;
            color: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            font-size: 12px;
            font-weight: bold;
        }
    }
    
`
export const ImageContainer = styled.div`
    @media (max-width: 767px) {
        display: none;
    }

    @media ${device.tablet} {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        lalign-items: center;
        margin-left: 20px;

        img {
            max-width: 100%;
            border-radius: 50%;
            object-fit: cover;
            border: 1px solid ${({theme}) => theme.bg3};
            padding: 4px;
            cursor: pointer;
        }
    }
`
export const MenuIcon = styled.div`
    cursor: pointer;
    position: relative;
    svg {
        font-size: 30px;
        border: 2px solid ${({theme}) => theme.bg3};
        border-radius: 6px;
    }

    @media ${device.tablet} {
        display: none;
    }
`
