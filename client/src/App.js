import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import RegStudentContainer from './Components/RegStudent/RegStudentContainer';
import AuthContainer from './Components/Auth/AuthContainer';
import RegTeacherContainer from './Components/RegTeacher/RegTeacherContainer';
import TeacherProfileContainer from './Components/TeacherProfile/TeacherProfileContainer';
import GroupsContainer from './Components/Groups/GroupsContainer';
import RegistrationContainer from './Components/Registration/RegistrationContainer';


const App = (props) => {


  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper-content'>
      
        <Route path='/teacher/:t_id?' render={() => <TeacherProfileContainer />} />
        <Route path='/regStudent' render={() => <RegStudentContainer />} />
        <Route path='/regTeacher' render={() => <RegTeacherContainer />} />
        <Route path='/auth' render={() => <AuthContainer />} />
        <Route path='/registration' render={() => <RegistrationContainer />} />
        <Route path='/groups' render={() => <GroupsContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />

      </div>
    </div>

  )
}


export default App;
////