import Navbar from '../navbar'
import SidebarScreen from '../sidebar'
import { Home, HomeContainer, PagesContainer } from './HomeElements'

const HomeScreen = ({children}) => {
  return (
    <Home>
        <SidebarScreen />
        <HomeContainer>
            <Navbar />
            <PagesContainer>
              {children}
            </PagesContainer>
        </HomeContainer>
    </Home>
  )
}

export default HomeScreen