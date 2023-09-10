// hooks 
import { Route, Routes } from 'react-router-dom';
// screens 
import Home from './screens/Home';
import Cakes from './screens/Cakes';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
// components 
import Header from './components/Header';
import Footer from './components/Footer';
import EditProfile from './components/EditProfile';
import ViewProfile from './components/ViewProfile';
import Notifications from './components/Notifications';
import History from './components/History';
import LogOut from './components/LogOut';

// css 
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />}>
          <Route path='view_profile' element={<ViewProfile />} />
          <Route path='edit_profile' element={<EditProfile />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='history' element={<History />} />
          <Route path='logout' element={<LogOut />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
