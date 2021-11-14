import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/react';
import '../css/home.css';
import { useHistory } from 'react-router-dom';


const loaderCSS = css`

    display: flex;
    margin: 20% 40%;

`

const dropdownMenu = () => {
    document.getElementById('dropdowncontent').classList.toggle('show');
}


const Home = () => {

    let history = useHistory();

    // const [course, setCourse] = useState({ data: "" });
    const [courseData, setCourseData] = useState();

    const callCoursesPage = async () => {
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

            console.log(data);

            setCourseData(data);


            // courseData.courses.map((data, id) => {

            //     console.log(data);
            // })

            if (!res === 200) {
                throw Error(res.error);
            }

        } catch (err) {
            console.log(err);
        }
    };

    // useEffect(() => {
    //     const coursesList = JSON.parse(localStorage.getItem("courses"));
    //     if(coursesList === undefined) {
    //         setCourseData(prev => ({ ...prev, ...coursesList }));
    //     }
    // }, []);

    useEffect(() => {

        callCoursesPage();

    }, []);



    const courseClicked = (data) => {

        // setCourse({ data: document.getElementById('courseDetails').textContent });
        localStorage.setItem('courseID', JSON.stringify(data));
        
        history.push('/courses-detail');

    };




    return (
        <>

            <div className="main-container" id="mainContainer">
                <div className="top-container">
                    <h1>Courses</h1>
                    <div className="dropdown">
                        <button id="dropdown-menu" onClick={dropdownMenu}>Current Courses
                        </button>
                        <i className="fa fa-sort-desc fa-2x"></i>
                        <div className="dropdown-content" id="dropdowncontent">
                            <a href="/upcomming-courses">Upcomming Courses</a>
                            <a className="active" href="/current-courses">Current Courses</a>
                        </div>
                        <a className="upcommingCourses" href="/upcomming-courses">Upcomming Courses
                            <i>&#8594;</i>
                        </a>
                    </div>
                </div>


                <div className="courses-container">

                    {courseData ? courseData.courses.map((data, id) => <>
                        <div className="courses">
                            <div className="courses-detail" onClick={() => {courseClicked(data.id)}}>
                                <h4 className="course-code">{data.code}</h4>
                                <h4 className="course-name" id="courseDetails">{data.name}</h4>
                                <h5 className="course-teacher">{data.teacher} | <span>More info</span></h5>
                            </div>
                        </div>
                    </>) : <> <BeatLoader css={loaderCSS} size={50} color='purple' /> </>}

                    <br />

                </div>

            </div>

        </>
    )
}

export default Home
