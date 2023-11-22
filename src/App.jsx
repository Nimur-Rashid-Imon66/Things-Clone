import Layout from "./components/Layout"
import { Routes, Route } from 'react-router-dom'
import InboxPage from "./pages/InboxPage"
import TodayPage from "./pages/TodayPage"
import AnytimePage from "./pages/AnytimePage"
import UpcomeingPage from "./pages/UpcomingPage"
import SomedayPage from "./pages/SomedayPage"
import LogbookPage from "./pages/LogbookPage"
import TrashPage from "./pages/TrashPage"
function App() {

  return (
    // <Layout />
    <Routes>
        <Route path="/" element={<InboxPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/anytime" element={<AnytimePage />} />
        <Route path="/upcoming" element={<UpcomeingPage />} />
        <Route path="/someday" element={<SomedayPage />} />
        <Route path="/logbook" element={<LogbookPage />} />
        <Route path="/trash" element={<TrashPage />} />
    </Routes>
  )
}

export default App
