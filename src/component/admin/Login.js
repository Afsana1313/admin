import React,{useState} from 'react';
import {auth} from '../../other/auth.js'
import '../../style/login.css'
function Login({setLoggedIn}) {
    const [user, setUser] = useState('User ID')
    const [password, setPassword] = useState('Password')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        var a = auth(user, password);
        setError(!a);
        if (a) {
            setLoggedIn();
            localStorage.setItem('loggedIn','true')
        }
        else {
            setUser('');
            setPassword('')
        }
        e.preventDefault();
    }
    return <div className='login-form'>
             <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                                placeholder='User ID'
                                type='text'
                                value={user}
                                onChange={(e)=> setUser(e.target.value)}
                            />
                  <input
                     placeholder='Password'
                        type='password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <input
                        type='submit'
                        value='Submit'
            />
            {error && <span>Invalid User Id Password</span>}
                </form>
  </div>;
}

export default Login;
