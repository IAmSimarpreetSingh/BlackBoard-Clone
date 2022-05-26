import React from 'react';
import '../css/login.css';
import { useHistory, NavLink } from 'react-router-dom';


const Login = () => {

    let history = useHistory();
    const [uid, setUid] = React.useState('');
    const [password, setPassword] = React.useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uid,
                password
            })
        });

        const data = res.json();

        if (res.status === 400 || !data) {
            window.alert("INVALID");
        } else {
            history.push('/courses');
        }

    }

    return (
        <div className="mainLoginContainer">
            <div className="loginContainer">
                <h1>WeBoard</h1>
                <div className="inputContainerLogin">

                    <ul>
                        <li className="listStyleLogin">
                            <input
                                className="inputStyleLogin"

                                id="uid-input"
                                type="text"
                                placeholder="Username"
                                value={uid}
                                onChange={(e) => { setUid(e.target.value) }}
                            />
                        </li>
                        <li className="listStyleLogin">
                            <input
                                className="inputStyleLogin"

                                id="password-input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </li>
                    </ul>

                    <button className="buttonStyleLogin" type="button" onClick={loginUser}>Sign In</button>

                    <div className="bottomLinksLogin">
                        <NavLink className="aCatelogLogin" to="/admin">Admin Login</NavLink>
                        <br />
                        <small className="bottomSmallLogin" >© 2021 Simarpreet Inc. All Rights Reserved. </small>
                        <br />
                        <NavLink className="aPrivacyLogin" to="#">Help</NavLink>
                        <NavLink className="aPrivacyLogin" to="#">Privacy and Terms of Use</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
