import React from 'react';
import './Outh.css';

class Outh extends React.Component {
  state = {
    id: null,
    name: null,
    email: null,
    avaUrl: null,

  }
  componentDidMount() {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          clint_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(() => console.log('init OK'), () => console.log('init ERR'));
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
      this.setState({
        id: googleUser.getBasicProfile().getId(),
        email: googleUser.getBasicProfile().getEmail(),
        name: googleUser.getBasicProfile().getName(),
        avaUrl: googleUser.getBasicProfile().getImageUrl()
      })

    }
    const _authErr = () => console.log('Auth Err')
    const GooqleAuth = window.gapi.auth2.getAuthInstance()

    GooqleAuth.signIn({
      scope: 'profile email'
    }).then(_authOk, _authErr)
    // }).then(user => console.log('Ok', user), _authErr)
  }

  signOut = () => {
    const GooqleAuth = window.gapi.auth2.getAuthInstance()
    GooqleAuth.signOut().then(() => {
      console.log('signOut OK')
      this.setState({
        id: null,
        name: null,
        email: null,
        avaUrl: null,
      })
    }, () => console.log('signOut ERR'))
  }
  render() {
    const { name } = this.state
    return (
      <div className="Outh">
        {!name && <button onClick={this.signIn} >Log In</button>}
        {!!name && <p>Privet, {name}!</p>}
        {!!name && <p>Privet, {this.props.gUser.g_name}!</p>}
        {!!name && <button onClick={this.signOut} >Log Out</button>}
      </div>
    )
  }
}

export default Outh;