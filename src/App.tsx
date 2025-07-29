import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import LoginPage from "./page/LoginPage"

const App: React.FC = () => {
  return (
    <div className='minh-h-screen'>
      <Routes >
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<>DASHBOARD</>} />
          <Route path='/machines' element={<>MACHINES</>} />
        </Route>
        <Route path="/*" element={<>NOT FOUND</>} />
      </Routes>
    </div>
  )
}

export default App