// hooks 
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// actions 
import { logoutProfile } from "../redux/userSlice";

// css 
import '../css/profile.css'


const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.user.details);
  // console.log(userDetails);
  return (
    <div className="profile">
      <div className="profile-nav">
        <ul>
          <li><NavLink to={'view_profile'}><i className="fa-solid fa-eye"></i> <span>View Profile</span> </NavLink></li>
          <li><NavLink to={'edit_profile'}><i className="fa-solid fa-pen-to-square"></i> <span>Edit Profile</span> </NavLink></li>
          <li className="logout-btn" onClick={() => { dispatch(logoutProfile({ login: false })); navigate('/') }}><i className="fa-solid fa-right-to-bracket"></i> <span>Log Out</span></li>
        </ul>
      </div>
      <div className="profile-content">
        <h2 className="greeting">Hi, {userDetails.name}!</h2>
        <Outlet />
      </div>
    </div>
  )
}

export default Profile