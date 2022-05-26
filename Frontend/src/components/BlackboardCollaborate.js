import React, { useState } from 'react';
import VideoCall from './VideoCall';
import '../css/collaborate.css';

function BlackboardCollaborate() {

    const [inCall, setInCall] = useState(false);

    return (
        <div className="CollaborateVideoClass">
            {inCall ? <VideoCall setInCall={setInCall} /> : (
                <button variant="contained" color="primary" onClick={() => setInCall(true)}>
                    Start
                </button>
            )}
        </div>
    );
};

export default BlackboardCollaborate;
