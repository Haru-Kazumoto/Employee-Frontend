// import Navbar from './component/Navbar.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Dashboard } from './pages/Dashboard.tsx';
// import { Employee } from './pages/Employee.tsx';
// import { About } from './pages/About.tsx';
// import { User } from './pages/User.tsx';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import './App.css'
import SignUp from './auth/SignUp.tsx';
import Login from './auth/login.tsx';
// import Login from './auth/login.tsx';
// import { Logout } from './pages/Logout.tsx';

function App() {
  return (
    <>
    {/* <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/employees' element={<Employee />}/>
        <Route path='/users' element={<User />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/logout' element={<Logout />}/>
      </Routes>
    </Router> */}
    <Login />

    </>
  )
}

export default App
