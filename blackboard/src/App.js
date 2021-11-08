import React from 'react';
import { Route } from 'react-router';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Activity from './components/Activity';
import Courses from './components/Courses';
import Organizations from './components/Organizations';
import Calender from './components/Calender';
import Messages from './components/Messages';
import Grades from './components/Grades';
import Tools from './components/Tools';
import SignOut from './components/SignOut';
import CourseDetail from './components/CourseDetail';
import BlackboardCollaborate from './components/BlackboardCollaborate';
import QuizViewPage from './components/QuizViewPage';

const App = () => {
  return (
    <>
      <Navbar />

      <Route path="/profile" component={Profile} />
      <Route path="/activity" component={Activity} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses-detail" component={CourseDetail} />
      <Route path="/collaborate" component={BlackboardCollaborate} />
      <Route path="/quiz-view" component={QuizViewPage} />
      <Route path="/organizations" component={Organizations} />
      <Route path="/calender" component={Calender} />
      <Route path="/messages" component={Messages} />
      <Route path="/grades" component={Grades} />
      <Route path="/tools" component={Tools} />
      <Route path="/signout" component={SignOut} />

    </>
  )
}

export default App
