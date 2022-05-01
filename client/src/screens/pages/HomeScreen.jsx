import MotionHoc from '../../components/MotionHoc'
import styled from 'styled-components'
import Widget from '../widget'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const HomePage = () => {
  return (
    <Container>
      <Widget type="projects" />
      <Widget type="documents" />
      <Widget type="ideas" />
    </Container>
  )
}

const HomeScreen = MotionHoc(HomePage)
export default HomeScreen
