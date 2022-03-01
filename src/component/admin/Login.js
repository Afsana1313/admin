import React,{useState} from 'react';
import {auth} from '../../other/auth.js'
import '../../style/login.css'
function Login({setLoggedIn}) {
    const [user, setUser] = useState('User ID')
    const [password, setPassword] = useState('Password')
    const [error, setError] = useState(false)
   const [showInfo, setShowInfo] = useState(false)
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
    const handleInfo = () => {
        setShowInfo(true)
        setTimeout(() => {
            setShowInfo(false)
        },4000)
    }
    return <div className='login-form'>
        <h2>Login Form</h2>
        <button
            style={{
                margin: '5px 0'
            }}
            onClick={handleInfo}>
            login info
        </button>
        {showInfo && <div className='modal-list'>
            <ul>
                <li> id: 'user1234', password: '1234user'</li>
                <li> id: 'adminuser', password: 'useradmin'</li>
                <li> id: 'root', password: 'abcd'</li>
                <li> id: 'rootadmin', password: 'adminroot'</li>
            </ul>
        </div>}
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
