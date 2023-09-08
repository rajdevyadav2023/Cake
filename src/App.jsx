import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import Header from './components/Header'

function App() {
  return (
    <>
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
