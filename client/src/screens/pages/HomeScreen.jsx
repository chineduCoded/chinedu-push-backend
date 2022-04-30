import MotionHoc from '../../components/MotionHoc'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`
const Card = styled.div`
  width: 400px;
  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.bg3};
  padding: 10px;
`
const Right = styled.div`
  flex: 1;
`
const Left = styled.div``

const HomePage = () => {
  return (
    <Container>
      <Card>
        <Right>Right</Right>
        <Left>left</Left>
      </Card>
      <Card>
        <Right>Right</Right>
        <Left>left</Left>
      </Card>
      <Card>
        <Right>Right</Right>
        <Left>left</Left>
      </Card>
    </Container>
  )
}

const HomeScreen = MotionHoc(HomePage)
export default HomeScreen
