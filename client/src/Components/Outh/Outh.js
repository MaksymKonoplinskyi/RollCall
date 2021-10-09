import React from 'react';
import { getTeacherData } from '../../http/userAPI';
import './Outh.css';
// import { useHistory } from 'react-router';

class Outh extends React.Component {
// const history = useHistory()
  
  componentDidMount() {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          clint_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(() => { }, () => console.log('init ERR'));
    });
  }

  
 
  signIn = () => {
    const _authOk = googleUser => {

      const gUser = {
        g_id: googleUser.getBasicProfile().getId(),
        email: googleUser.getBasicProfile().getEmail(),
        g_name: googleUser.getBasicProfile().getName(),
        avaUrl: googleUser.getBasicProfile().getImageUrl(),
        id_token: googleUser.getAuthResponse().id_token,
      }
      this.props.setUserGData(gUser.g_id, gUser.email, gUser.g_name, gUser.avaUrl, gUser.id_token)
     

      const trySetTeacherData = async () => {
        try {
          const responseData = await getTeacherData(gUser.g_id)
          const userData = { ...responseData.data }
          this.props.setUserData(userData)
          console.log(responseData);
          console.log(responseData.data.id);
          
          // history.push(`/teacher/${response.data.id}`)
        } catch (e) {
          alert(e.response.data.message)
        }
      }
      trySetTeacherData()

    }



    const _authErr = () => console.log('Auth Err')


    const GooqleAuth = window.gapi.auth2.getAuthInstance()

    GooqleAuth.signIn({
      scope: 'profile email'
    }).then(_authOk, _authErr)
  }

  signOut = () => {
    const GooqleAuth = window.gapi.auth2.getAuthInstance()
    GooqleAuth.signOut().then(() => {

      if (true) {
        const gUser = {
          g_id: null,
          email: null,
          g_name: null,
          avaUrl: null,
          id_token: null,
        }
        this.props.setUserGData(gUser.g_id, gUser.email, gUser.g_name, gUser.avaUrl, gUser.id_token)
      }

    }, () => console.log('signOut ERR'))
  }
  render() {
    const { g_id } = this.props.gUser
    return (
      <div className="Outh">
        {!g_id && <button onClick={this.signIn} >Log In</button>}
        {!!g_id && <button onClick={this.signOut} >Log Out</button>}
      </div>
    )
  }
}

export default Outh;