import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Cakes from './screens/Cakes'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Cart from './screens/Cart'

function App() {
  return (
    <>
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cakes' element={<Cakes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
