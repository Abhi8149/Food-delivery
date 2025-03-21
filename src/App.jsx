
import Home from './screens/Home'
import Login from './screens/Login'
import Contact from './screens/Contact'
import { Signup } from './screens/Signup'
import './App.css'
import { Route,BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import { CartProvider } from './components/ContextReducer'
import MyOrder from './screens/MyOrder'


function App() {
  

  return (
    <>
   <CartProvider>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/createuser" element={<Signup />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/myorderdata" element={<MyOrder />} />
      
    </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App
