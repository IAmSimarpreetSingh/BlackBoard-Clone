import '../css/admin.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Admin = () => {

    const history = useHistory()
    const [uid, setUid] = useState('');
    const [password, setPassword] = useState('');

    const loginAdmin = async (e) => {
        e.preventDefault();

        const res = await fetch('/admin', {
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
            history.push('/adminpanel');
        }

    }


    return (
        <div className="adminContainer">
            <div className="logoSection">
                <h1>WeBoard</h1>
                <span>Admin Login</span>
            </div>
            <div className="adminLoginFields">
                <input type="text" placeholder="UserID" value={uid}
                    onChange={(e) => { setUid(e.target.value) }} />
                <input type="password" placeholder="Password" value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className="loginButtonSection">
                <button onClick={loginAdmin}>Login</button>
            </div>
        </div>
    )
}

export default Admin