import { useNavigate } from 'react-router-dom'
import { useReducer, useRef } from 'react';
import '../css/login.css';

const myFunction = (states, action) => {

    switch(action.type) {

        case 'myEmail': return { ...states, email: action.payload };
        case 'myPassword': return { ...states, password: action.payload };
 
        default: throw(new Error('Error in the login switch case'))
    }

}

const Login = () => {

    document.title = "Log In | The Cake ";

    const [ states, dispatch ] = useReducer(myFunction, { email: '', password: '' });
    const navigate = useNavigate();
    const formRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Make a request to the api "login"
        const request = await fetch('http://localhost/Cake/server/entries/login.php', {
            method: 'POST',
            // The purpose of this is to make new form object and send the values to the "login" api
            body: new FormData(formRef.current)
        });

        // To get the response from the login api, if the response includes ("Login Successfully!")
        // then user should be redirect or navigate to "dashboard"
        const response = await request.json();

        // Make a logic here if the response is === to something, then navigate the user to dashboard.
        console.log(response);

    }
    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit} ref={formRef}>
                <h2><i className="fa-solid fa-user-tie"></i> Login</h2>

                <div className="form-control">
                    <label htmlFor="email"><i className="fa-solid fa-at"></i> Email</label>
                    <input type="email" placeholder='Enter Here' id='email' name='email' value={states.email} onChange={(e) => dispatch({ type: 'myEmail', payload: e.target.value })} />
                </div>
                <div className="form-control">
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
                    <input type="password" placeholder='Enter Here' id='password' name='password' value={states.password} onChange={(e) => dispatch({ type: 'myPassword', payload: e.target.value })} />
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