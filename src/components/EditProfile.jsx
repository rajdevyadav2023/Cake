// hooks 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// actions 
import { editProfile } from "../redux/userSlice";

// css 
import '../css/editprofile.css'


const EditProfile = () => {
  const {name, phone, email, address, password } = useSelector(state=>state.user.details);

  const [eName, setEname] = useState(name);
  const [ePhone, setEphone] = useState(phone);
  const [eEmail, setEemail] = useState(email);
  const [eAddress, setEaddress] = useState(address);
  const [ePassword, setEpassword] = useState('');

  const dispatch = useDispatch();
const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

  if(ePassword === password){
dispatch(editProfile({name:eName, phone:ePhone, email:eEmail, address: eAddress}));
navigate('/')
  } else{
    alert('Wrong Password!');
  }
  }
  return (
    <div className='edit-profile'>
        
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-control">
            <label htmlFor="name"><i className="fa-solid fa-circle-user"></i>  Name</label>
            <input type="text" value={eName} onChange={(e)=>setEname(e.target.value)} id="name" />
          </div>
          <div className="form-control">
            <label htmlFor="phone"><i className="fa-solid fa-phone"></i>  Phone</label>
            <input type="tel" value={ePhone} onChange={(e)=>setEphone(e.target.value)} id="phone" />
          </div>
          <div className="form-control">
            <label htmlFor="email"><i className="fa-solid fa-at"></i> Email</label>
            <input type="email" value={eEmail} onChange={(e)=>setEemail(e.target.value)} id="email" />
          </div>
          <div className="form-control">
            <label htmlFor="address"><i className="fa-solid fa-location-dot"></i> Address</label>
            <textarea type="text" value={eAddress} onChange={(e)=>setEaddress(e.target.value)} id="address" ></textarea>
          </div>
          <p><i className="fa-solid fa-square-check"></i> Please, Enter Your Password  And Click On Save Button To Save The Changes What You Made.</p>
          <div className="form-control">
            <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
            <input type="password" value={ePassword} onChange={(e)=>setEpassword(e.target.value) } placeholder="Enter Here" id="password" />
          </div>

          <div className="btn-group">
            <button type="submit">Save</button>
            <button type="button" onClick={()=>navigate('/')}>Exit</button>
          </div>
        </form>

        
    </div>
  )
}

export default EditProfile;