import React from 'react';
import { Route } from 'react-router';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Courses from './components/Courses';
import SignOut from './components/SignOut';
import CourseDetail from './components/CourseDetail';
import BlackboardCollaborate from './components/BlackboardCollaborate';


const App = () => {
  return (
    <>
      <Navbar />

      <Route path="/profile" component={Profile} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses-detail" component={CourseDetail} />
      <Route path="/collaborate" component={BlackboardCollaborate} />
      <Route path="/signout" component={SignOut} />

    </>
  )
}

export default App
