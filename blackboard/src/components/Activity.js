import React from 'react';
import '../css/activity.css';
import 'font-awesome/css/font-awesome.min.css';

function Activity() {
    return (
        <>
            <div className="upperActivityContainer">

                <div className="activityTitle">
                    <h1>Stream</h1>
                </div>

                <div className="activities">
                    <div className="vL"></div>
                    <h1>Important</h1>

                    <div className="Activitystreams">
                        <div className="stream">
                            <i className="fa fa-file-text fa-3x"></i>
                            <div className="streamCourse">
                                <h1>PL/SQL</h1>
                                <small>Past Due: Post Lab Test 2.2</small><br />
                                <small>Due Date: 10/4/2021</small>
                            </div>
                            <button>Dismiss</button>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
};

export default Activity;
