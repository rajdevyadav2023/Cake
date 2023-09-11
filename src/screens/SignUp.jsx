// hooks 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

// css 
import '../css/signup.css';

// actions 
import { createProfile } from '../redux/userSlice';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    document.title = "Sign Up | The Cake ";


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createProfile({ name: name, email: email, password: password }));
        navigate('/');
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