// hooks 
import { useSelector } from "react-redux";
// css 
import '../css/viewprofile.css';
const ViewProfile = () => {
  const userDetails = useSelector(state=>state.user.details);
  // console.log(userDetails);
  return (
    <div className='view-profile'>
        <p><i className="fa-solid fa-circle-user"></i> Name : {userDetails.name}</p>
        <p><i className="fa-solid fa-phone"></i> Phone : {userDetails.phone}</p>
        <p><i className="fa-solid fa-at"></i> Email : {userDetails.email}</p>
        <p><i className="fa-solid fa-location-dot"></i> Address : {userDetails.address}</p>
    </div>
  )
}

export default ViewProfile;