import { Route, Routes } from "react-router-dom"
import ProtectedLayout from "./components/ProtectedLayout"
import LoginPage from "./page/LoginPage"

const App: React.FC = () => {
  return (
    <div className='minh-h-screen'>
      <Routes >
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedLayout />}>
          <Route path='/' element={<>DASHBOARD</>} />
          <Route path='/machines' element={<>MACHINES</>} />
          <Route path='/mapping' element={<>MAPPING</>} />
          <Route path='/movements' element={<>MOVEMENTS</>} />
          <Route path='/formatter' element={<>FORMATTER</>} />
          <Route path='/indicators' element={<>INDICATORS</>} />
          <Route path='/lung' element={<>LUNG</>} />
          <Route path='/inventory' element={<>INVENTORY</>} />
          <Route path='/basesgh' element={<>BASESGH</>} />
          <Route path='/basekaspesky' element={<>BASEKASPERSKY</>} />
          <Route path='/demands' element={<>DEMANDS</>} />
          <Route path='/switchvlan' element={<>SWITCHVLAN</>} />
        </Route>
        <Route path="/*" element={<>NOT FOUND</>} />
      </Routes>
    </div>
  )
}

export default App