import Navbar from './component/Navbar.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard.tsx';
import { Employee } from './pages/Employee.tsx';
import { About } from './pages/About.tsx';
import { User } from './pages/User.tsx';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/employees' element={<Employee />}/>
        <Route path='/users' element={<User />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
