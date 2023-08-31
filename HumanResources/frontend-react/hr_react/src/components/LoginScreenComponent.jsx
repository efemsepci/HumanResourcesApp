import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

const LoginScreenComponent = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[users, setUsers] = useState([]);
    const[canLogin, setCanLogin] = useState(false);
    const[message, setMessage] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        UserService.getUsers()
        .then(data => {
            setUsers(data.data);
        })
        .catch(error => {
            console.error('Error fetching users details: ', error);
        });
    },[])


    console.log(users);

    const handleLogin = (e) =>{
        e.preventDefault();
        let userMatch = null;
        users.forEach(
            (user1) => {
                if((username === user1.username) && (password === user1.password)){
                    userMatch = user1;
                }
            }
        )
        if(userMatch){
            setCanLogin(true);
            sessionStorage.setItem('userRole', userMatch.role);
            console.log('Login succesful');
        
            if(userMatch.role === 'ADMIN'){
                navigate('/admin');
            }
            else if (userMatch.role === 'HR_MANAGEMENT'){
                navigate('/personnel');
            }
            else if(userMatch.role === 'INVENTORY_MANAGEMENT'){
                navigate('/inventory');
            }
        }
        else{
            setCanLogin(false)
            setMessage('Invalid username or password!');
        }
        console.log(localStorage.getItem("userRole"));
    }

    

    return(
    <div>
        <div className='container' style={{margin: "auto", width: "50%", padding: "70px 0"}}>
        <div style={{margin: "auto", width: "50%", padding: "70px 0"}}>
        <h2>Welcome!</h2>
        <form onSubmit={handleLogin}>
            <div className='form-group'>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        /> </div>
        <div className='form-group'>
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
            </div>
            <div className='form-group'>
            <button type='submit' className="btn btn-primary">Login</button>
            </div>
        </form>
        <div className='form-group'>
        <p style={{color: 'red'}}>{message}</p>
        </div>
        </div>
        </div>
    </div>
    )
    
}

export default LoginScreenComponent;

