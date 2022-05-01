import styled from "styled-components";
import {device} from "../../styles/devices"


export const WidgetContainer = styled.div`
    

    @media ${device.mobileS} {
        width: 100%;
        display: flex;
        justify-content: space-between;
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        padding: 10px;
        border-radius: 10px;
        height: 100px;
    }

    @media ${device.tablet} {
        width: 200px;
        display: flex;
        justify-content: space-between;
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        padding: 10px;
        border-radius: 10px;
        height: 100px;
        white-space: nowrap;
    }

    @media ${device.laptop} {
        width: 280px;
        display: flex;
        justify-content: space-between;
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        padding: 10px;
        border-radius: 10px;
        height: 100px;
    }

    @media ${device.laptopL} {
        display: flex;
        justify-content: space-between;
        width: 449.333px;
        // flex: 1;
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        padding: 10px;
        border-radius: 10px;
        height: 100px;
    }
`
export const WidgetLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.span`
    font-weight: bold;
    font-sizes: 14px;
    color: rgb(160, 160, 160);
`
export const Counter = styled.span`
    font-size: 28px;
    font-weight: 300;
`
export const ProjectsLink = styled.span`
    font-size: 12px;
    border-bottom: 1px solid ${({theme}) => theme.bg3};
    cursor: pointer;
`
export const WidgetRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    svg {
        font-size: 25px;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        align-self: flex-end;
    }
`
export const Percentage = styled.div`
    display: flex;
    align-items: center;
    // font-size: 14px;

    &.positive {
        color: green;
    }
    &.negative {
        color: red;
    }
`
export const Icon = styled.div`
    
`
