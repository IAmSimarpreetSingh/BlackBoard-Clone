import React, { useState, useEffect } from 'react';
import '../css/course.css';
import { HighlightOffSharp } from '@material-ui/icons';
import { useHistory, NavLink } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/react';
import Avtar from '../img/avtar.png';
// import Test from '../img/test.png';
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

            // console.log(data);

            setCourseData(data);

            if (!res === 200) {
                throw Error(res.error);
            }

        } catch (err) {
            console.log(err);
        }
    };

    const getCourse = () => {
        const courseID = localStorage.getItem('courseID');
        const ID = JSON.parse(courseID);

        const clickedCourse = courseData.courses;

        clickedCourse.forEach(element => {
            if (element.id === ID) {
                course = element;
                setSelectedCourse(course);
                return course;
            }
        });

        // console.log(course.id);
        // console.log(course.code);
        // console.log(course.name);
        // console.log(course.teacher);
        // console.log("------------------------------");
        // console.log(selectedCourse);

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
                                <i className="fa fa-user fa-lg"></i>
                                <NavLink to="/profile">Roster</NavLink>
                            </li>
                            <li>
                                <i className="fa fa-video-camera fa-lg"></i>
                                <NavLink to="/collaborate">Blackboard Collaborate</NavLink>
                            </li>
                            <li>
                                <i className="fa fa-file-text fa-lg"></i>
                                <NavLink to="/courses-detail">Attendance</NavLink>
                            </li>
                            <li>
                                <i className="fa fa-sitemap fa-lg"></i>
                                <NavLink to="/courses-detail">Groups</NavLink>
                            </li>
                            <li>
                                <i className="fa fa-bullhorn fa-lg"></i>
                                <NavLink to="/courses-detail">Announcement</NavLink>
                            </li>
                            <li>
                                <i className="fa fa-book  fa-lg"></i>
                                <NavLink to="/courses-detail">Books and Tools</NavLink>
                            </li>
                        </ul>

                    </div>

                    <div className="courseContentContainer" onClick={ getCourse }>

                        <h2>Course Content</h2>
                        <hr className="HorizontalHR" />

                        <div className="contentContainer">
                            <img src={Content} alt="No-Content" />
                            <h2>Content is on the way!</h2>
                        </div>

                        {/* <div className="QuizContainer">

                            <div className="Quiz">  

                                <img src={ Test } alt="TestIcon" />
                                <NavLink to="/quiz-view">Quiz</NavLink>
                            
                            </div>

                        </div> */}

                    </div>
                </div>



            </div>

        </div>
    )
};

export default CourseDetail;
