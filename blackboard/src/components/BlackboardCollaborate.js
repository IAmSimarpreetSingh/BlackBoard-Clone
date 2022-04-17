import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import VideoCall from './VideoCall';
import '../css/collaborate.css';

function BlackboardCollaborate() {

    const [inCall, setInCall] = useState(false);

    return (
        <div className="CollaborateVideoClass">
            {inCall ? <VideoCall setInCall={setInCall} /> : (
                <Button variant="contained" color="primary" onClick={() => setInCall(true)}>
                    Start
                </Button>
            )}
        </div>
    );
};

export default BlackboardCollaborate;
