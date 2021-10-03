import React from 'react';
import './Outh.css';

class Outh extends React.Component {

  componentDidMount() {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          clint_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(() => {}, () => console.log('init ERR'));
    }); 
  }

  signIn = () => {
    const _authOk = googleUser => {
      if (true) {
        let gUser = {
          id: googleUser.getBasicProfile().getId(),
          email: googleUser.getBasicProfile().getEmail(),
          g_name: googleUser.getBasicProfile().getName(),
          avaUrl: googleUser.getBasicProfile().getImageUrl()
        }
        this.props.setUserGData(gUser.id, gUser.email, gUser.g_name, gUser.avaUrl)
      }
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
        let gUser = {
          id: null,
          email: null,
          g_name: null,
          avaUrl: null
        }
        this.props.setUserGData(gUser.id, gUser.email, gUser.g_name, gUser.avaUrl)
      }

    }, () => console.log('signOut ERR'))
  }
  render() {
    const { id } = this.props.gUser
    return (
      <div className="Outh">
        {!id && <button onClick={this.signIn} >Log In</button>}
        {!!id && <button onClick={this.signOut} >Log Out</button>}
      </div>
    )
  }
}

export default Outh;