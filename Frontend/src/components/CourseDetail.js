import React, { useState, useEffect } from 'react';
import '../css/course.css';
import { HighlightOffSharp } from '@material-ui/icons';
import { useHistory, NavLink } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/react';
import Avtar from '../img/avtar.png';
import Content from '../img/course-outline-zero-state-illustration.png';
import 'font-awesome/css/font-awesome.min.css';


const loaderCSS = css`

    display: flex;
    margin-left: 50%;

`

function CourseDetail() {

    let history = useHistory();
    let course;
    const [courseData, setCourseData] = useState();
    const [selectedCourse, setSelectedCourse] = useState();

    const callCourses = async () => {
        try {

            const res = await fetch('/courses', {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setCourseData(data);


            if (!res === 200) {
                throw Error(res.error);
            }

        } catch (err) {
            console.log(err);
        }

        setTimeout(() => {
            document.getElementById("Clicked").click();
        }, 2000);

    };

    const getCourse = async () => {
        const courseID = await localStorage.getItem('courseID');
        const ID = JSON.parse(courseID);

        const clickedCourse = courseData.courses;

        clickedCourse.forEach(element => {
            if (element.id === ID) {
                course = element;
                setSelectedCourse(course);
                return course;
            }
        });

    };


    useEffect(() => {

        callCourses();

    }, []);


    return (
        <div className="CourseDetailMainDiv">
            <HighlightOffSharp className="HighlightOffsharp" style={{ color: 'red' }} fontSize='large' onClick={() => { history.push('/courses') }}> </HighlightOffSharp>


            {selectedCourse ? (<>


                <div className="upperCourseContainer">
                    <h3>{selectedCourse.code}</h3>
                    <h1>{selectedCourse.name}</h1>
                </div>

                <div className="CourseTeacherContainer">
                    <img className="TeacherAvtarImage" src={Avtar} alt="Avtar" />
                    <h2>{selectedCourse.teacher}</h2>
                    <h3>Instructor</h3>
                </div>

            </>) : (
                <BeatLoader css={loaderCSS} size={5} color='purple' />
            )}


            <div className="courseClassOptionsContainer">

                <div className="DetailActionContainer">

                    <h2>Details and Actions</h2>
                    <hr className="HorizontalHR" />
                    <hr className="VerticalHR" />

                    <div className="activitiesContainer">

                        <ul>
                            <li>
                                <i className="fa fa-video-camera fa-lg"></i>
                                <NavLink to="/collaborate">Join Lecture</NavLink>
                            </li>
                        </ul>

                    </div>

                    <div className="courseContentContainer" id="Clicked" onClick={getCourse}>

                        <h2>Course Content</h2>
                        <hr className="HorizontalHR" />

                        <div className="contentContainer">
                            <img src={Content} alt="No-Content" />
                            <h2>Content is on the way!</h2>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
};

export default CourseDetail;
