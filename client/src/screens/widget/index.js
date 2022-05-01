import React from 'react'
import { Counter, Percentage, ProjectsLink, Title, WidgetContainer, WidgetLeft, WidgetRight } from './WidgetElements'
import {MdOutlineKeyboardArrowUp} from "react-icons/md"
import {AiOutlineProject} from "react-icons/ai"
import {FaFileAlt, FaCopy} from "react-icons/fa"

const Widget = ({ type }) => {
  let data

  switch (type) {
    case "projects":
      data = {
        title: "PROJECTS",
        link: "See all projects",
        counter: 50,
        icon: (
          <FaFileAlt style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }} />
        )
      }
      break
      case "documents":
        data = {
          title: "DOCUMENTS",
          link: "View all documents",
          counter: 19,
          icon: (
            <FaCopy style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)"
            }} /> 
          )
        }
        break
      case "ideas": 
        data = {
          title: "NEW IDEAS",
          link: "See all ideas",
          counter: 6,
          icon: (
            <AiOutlineProject style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)"
            }} />
          )
        }
        break
    default:
      break;
  }

  const diff = 20

  return (
    <WidgetContainer>
        <WidgetLeft>
          <Title>{data.title}</Title>
          <Counter>{data.counter}</Counter>
          <ProjectsLink>{data.link}</ProjectsLink>
        </WidgetLeft>
        <WidgetRight>
          <Percentage className="positive">
            <MdOutlineKeyboardArrowUp />
            {diff}%
          </Percentage>
         {data.icon}
        </WidgetRight>
    </WidgetContainer>
  )
}

export default Widget