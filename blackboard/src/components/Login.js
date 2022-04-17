import React from 'react';
import '../css/login.css';
import { useHistory, NavLink } from 'react-router-dom';
import blackBoardLogo from '../img/bb-corp-logo.png';


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

    // const styles = {
    //     mainLoginContainer: {
    //         background: "#272727",
    //         display: "flex",
    //         position: "relative",
    //         justifyContent: "center",
    //         alignContent: "center",
    //         width: "100%",
    //         height: "100vh"
    //     },

    //     loginContainer: {
    //         position: "relative",
    //         display: "inline-block",
    //         lineHeight: "55px",
    //         justifyContent: "center",
    //         alignContent: "center",
    //         textAlign: "center",
    //         padding: "10px",
    //         marginTop: "7%"
    //     },

    //     img: {
    //         display: "inline-block",
    //         verticalAlign: "middle",
    //         border: 0,
    //         width: "290px",
    //         maxWidth: "100%",
    //         height: "auto",
    //         marginBottom: "30px"
    //     },

    //     inputContainer: {
    //         position: "relative",
    //         width: "100%",
    //         overflow: "hidden"
    //     },

    //     listStyle: {
    //         listStyle: "none",
    //         padding: "24px",
    //         display: "block",
    //         width: "100%"
    //     },

    //     inputStyle: {
    //         position: "relative",
    //         outline: "none",
    //         background: "inherit",
    //         border: "none",
    //         borderBottom: "2px solid #fff",
    //         display: "block",
    //         width: "290px",
    //         padding: "8px",
    //         color: "#fff"
    //     },

    //     buttonStyle: {
    //         display: "inline-block",
    //         width: "88%",
    //         height: "40px",
    //         background: "inherit",
    //         color: "#919191",
    //         borderColor: "#969696",
    //         cursor: "pointer",
    //         margin: "45px 0"
    //     },

    //     bottomLinks: {
    //         position: "relative",
    //         display: "block",
    //         marginTop: "30px"
    //     },

    //     aCatelog: {
    //         textDecoration: "underline",
    //         color: "#7C7C7C",
    //         fontSize: "13px",
    //         padding: "20px"
    //     },

    //     bottomSmall: {
    //         color: "#7C7C7C",
    //         fontSize: "14px"
    //     },

    //     aPrivacy: {
    //         color: "#7C7C7C",
    //         display: "inline-flex",
    //         transform: "translateY(-30px)",
    //         fontSize: "13px",
    //         margin: "0 5px"
    //     }
    // };

    return (
        <div className="mainLoginContainer">
            <div className="loginContainer">
                <img src={blackBoardLogo} className="BBlogoImg" alt="BBLogo" />
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
                        <NavLink className="aCatelogLogin" to="#">View Course Catelog</NavLink>
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
