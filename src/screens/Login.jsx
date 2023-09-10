import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/login.css';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  document.title = "Log In | The Cake ";

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <h2><i className="fa-solid fa-user-tie"></i> Login</h2>

                <div className="form-control">
                    <label htmlFor="email"><i className="fa-solid fa-at"></i> Email</label>
                    <input type="email" placeholder='Enter Here' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
                    <input type="password" placeholder='Enter Here' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-control">
                    <button type='submit'>Log In</button>
                    <button type='button' onClick={() => navigate('/signup')}>Sign Up</button>
                </div>

            </form>
        </div>
    )
}

export default Login