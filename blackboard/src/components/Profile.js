import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avtar from '../img/avtar.png';
import '../css/profile.css';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/react';



const loaderCSS = css`

    display: flex;
    margin: 10% 40%;

`

function Profile() {

    const history = useHistory();
    const [userData, setUserData] = useState();

    const callProfilePage = async () => {
        try {
            const res = await fetch('/profile', {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();

            setUserData(data);


            if (!res === 200) {
                const err = new Error(res.error);
                throw err;
            }

        } catch (err) {
            console.log(err);
            history.push("/");
        }
    };

    useEffect(() => {
        callProfilePage();
    }, []);

    return (
        <div className="profileContainer">

            <div className="avtarImage">
                <img src={Avtar} alt="avtar" className="profile-avtar" />
            </div>


            {userData ? <>
                <div className="basicInformation">
                    <table>
                        <tbody>
                            <tr>
                                <td><span>NAME</span></td>
                                <td>{userData.name}</td>
                            </tr>
                            <tr>
                                <td><span>STUDENT ID</span></td>
                                <td>{userData.uid}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </> : <> <BeatLoader css={loaderCSS} size={50} color='purple' /> </>}

        </div>
    )
}

export default Profile
