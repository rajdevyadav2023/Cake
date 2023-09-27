// hooks 
import { useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

// css 
import '../css/signup.css';

const myFunction = (states, action) => {

    switch(action.type) {
        case 'myName': return { ...states, name: action.payload };
        case 'myEmail': return { ...states, email: action.payload };
        case 'myPassword': return { ...states, password: action.payload };
        default: throw(new Error('Error signup switch case'))
    }

}

const SignUp = () => {
    
    const [ states, dispatch ] = useReducer(myFunction, { name: '', emaail: '', password: '' });

    const formRef = useRef(null);

    const navigate = useNavigate();

    document.title = "Sign Up | The Cake ";


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Make a request to the api "register"
        const request = await fetch('http://localhost/Cake/server/entries/register.php', {
            method: 'POST',
            // The purpose of this is to make new form object and send the values to the "register" api
            body: new FormData(formRef.current)
        });

        // To get the response from the register api, if the response includes ("Registered Successfully!")
        // then user should be redirect or navigate to "dashboard"
        const response = await request.json();

        // Make a logic here if the response is === to something, then navigate the user to dashboard.
        console.log(response);
    
    }

    return (
        <div className='signup-form'>
            <form onSubmit={handleSubmit} ref={formRef}>
                <h2><i className="fa-solid fa-user-tie"></i> Sign Up</h2>

                <div className="form-control">
                    <label htmlFor="name"><i className="fa-solid fa-user"></i> Name</label>
                    <input type="text" placeholder='Enter Here' id='name' name='name' value={states.name} onChange={(e) => dispatch( { type: 'myName', payload: e.target.value } )} />
                </div>

                <div className="form-control">
                    <label htmlFor="email"><i className="fa-solid fa-at"></i> Email</label>
                    <input type="email" placeholder='Enter Here' id='email' name='email' value={states.email} onChange={(e) => dispatch( { type: 'myEmail', payload: e.target.value } )} />
                </div>

                <div className="form-control">
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
                    <input type="password" placeholder='Enter Here' id='password' name='password' value={states.password} onChange={(e) => dispatch( { type: 'myPassword', payload: e.target.value } )} />
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