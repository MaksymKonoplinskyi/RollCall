import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';



const App = (props) => {
  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />


        <Route path='/News' render={() => <News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>
    </div>

  )
}
{/* <div>
        <Outh />
      </div> */}

export default App;
////