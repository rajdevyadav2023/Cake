// hooks 
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// css 
import '../css/profile.css'

const Profile = () => {
  const userDetails = useSelector(state=>state.user.details);
  // console.log(userDetails);
  return (
    <div className="profile">
      <div className="profile-nav">
        <ul>
          <li><NavLink to={'view_profile'}><i className="fa-solid fa-eye"></i> <span>View Profile</span> </NavLink></li>
          <li><NavLink to={'edit_profile'}><i className="fa-solid fa-pen-to-square"></i> <span>Edit Profile</span> </NavLink></li>
          <li><NavLink to={'notifications'}> <i className="fa-solid fa-bell"></i> <span>Notifications</span> </NavLink></li>
          <li><NavLink to={'history'}><i className="fa-solid fa-layer-group"></i> <span>History</span> </NavLink></li>
          <li><NavLink to={'logout'}><i className="fa-solid fa-right-to-bracket"></i> <span>Log Out</span> </NavLink></li>
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