import { Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/pages/HomeScreen'
import Calendar from './screens/pages/Calendar'
import Projects from './screens/pages/Projects'
import Documents from './screens/pages/Documents'
import Settings from './screens/pages/Settings'
import SingleProject from './screens/pages/SingleProject'
import NewProject from './screens/pages/NewProject'
import SingleDocument from './screens/pages/SingleDocument'
import NewDocument from './screens/pages/NewDocument'
import { AnimatePresence } from 'framer-motion'

const HomeScreenRoutes = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeScreen />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path=":projectId" element={<SingleProject />} />
              <Route path="add-projects" element={<NewProject />} />
            </Route>
            <Route path="documents">
              <Route index element={<Documents />} />
              <Route path=":documentId" element={<SingleDocument />} />
              <Route path="add-documents" element={<NewDocument />} />
            </Route>
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default HomeScreenRoutes
