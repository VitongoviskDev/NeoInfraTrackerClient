import { Route, Routes } from "react-router-dom"
import ProtectedLayout from "./components/ProtectedLayout"
import LoginPage from "./page/LoginPage"
import MachinesPage from "./page/MachinesPage"
import BaseSghPage from "./page/BaseSghPage"

const App: React.FC = () => {
  return (
    <div className='minh-h-screen'>
      <Routes >
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedLayout />}>
          <Route path='/' element={<>DASHBOARD</>} />
          <Route path='/machines' element={<MachinesPage />} />
          <Route path='/mapping' element={<>MAPPING</>} />
          <Route path='/movements' element={<>MOVEMENTS</>} />
          <Route path='/validator' element={<>VALIDATOR</>} />
          <Route path='/mover' element={<>MOVER</>} />
          <Route path='/formatter' element={<>FORMATTER</>} />
          <Route path='/indicators' element={<>INDICATORS</>} />
          <Route path='/lung' element={<>LUNG</>} />
          <Route path='/inventory' element={<>INVENTORY</>} />
          <Route path='/basesgh' element={<BaseSghPage/>} />
          <Route path='/basekaspesky' element={<>BASEKASPERSKY</>} />
          <Route path='/demands' element={<>DEMANDS</>} />
          <Route path='/switchvlan' element={<>SWITCHVLAN</>} />
          <Route path='/admin/site' element={<>SITE</>} />
          <Route path='/admin/team' element={<>TEAM</>} />
        </Route>
        <Route path="/*" element={<>NOT FOUND</>} />
      </Routes>
    </div>
  )
}

export default App