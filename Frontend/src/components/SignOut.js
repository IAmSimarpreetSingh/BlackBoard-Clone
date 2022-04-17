import React, { useEffect } from 'react';
import { useHistory } from 'react-router';



function SignOut() {

    const history = useHistory();

    useEffect(() => {
        fetch('/signout', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            history.push('/', { replace: true });
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    });

    return (
        <></>
    )
}

export default SignOut
