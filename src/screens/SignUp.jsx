import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/signup.css';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
  document.title = "Sign Up | The Cake ";

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    
  return (
    <div className='signup-form'>
    <form onSubmit={handleSubmit}>
        <h2><i className="fa-solid fa-user-tie"></i> Sign Up</h2>

        <div className="form-control">
            <label htmlFor="name"><i className="fa-solid fa-user"></i> Name</label>
            <input type="text" placeholder='Enter Here' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        
        <div className="form-control">
            <label htmlFor="email"><i className="fa-solid fa-at"></i> Email</label>
            <input type="email" placeholder='Enter Here' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <div className="form-control">
            <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
            <input type="password" placeholder='Enter Here' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
       
        <div className="form-control">
            <button type='submit'>Sign Up</button>
            <button type='button' onClick={() => navigate('/login')}>Log In</button>
        </div>

    </form>
</div>
  )
}

export default SignUp