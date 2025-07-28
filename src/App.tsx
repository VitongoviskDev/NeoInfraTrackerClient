import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import SideMenu from "./components/SideMenu"

const App: React.FC = () => {
  return (
    <div className='flex'>
      <SideMenu/>
      <div style={{ gridRow: 'content' }} className='h-full'>
        <Routes >
          <Route path='/login' element={<>LOGIN</>} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<>DASHBOARD</>} />
            <Route path='/machines' element={<>MACHINES</>} />
          </Route>
          <Route path="/*" element={<>NOT FOUND</>} />
        </Routes>
      </div>
    </div>
  )
}

export default App