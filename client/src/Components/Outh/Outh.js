import React, { useEffect } from 'react';
import { getTeacherData } from '../../http/userAPI';
import './Outh.css';
import { useHistory } from 'react-router';

const Outh = (props) => {

  const history = useHistory()

  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          clint_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(() => { }, () => console.log('init ERR'));
    })
  }, [])




  const signIn = () => {
    const _authOk = googleUser => {

      const gUser = {
        g_id: googleUser.getBasicProfile().getId(),
        email: googleUser.getBasicProfile().getEmail(),
        g_name: googleUser.getBasicProfile().getName(),
        avaUrl: googleUser.getBasicProfile().getImageUrl(),
        id_token: googleUser.getAuthResponse().id_token,
      }
      props.setUserGData(gUser)






      const trySetTeacherData = async () => {
        try {
          const responseData = await getTeacherData(gUser.g_id)
          
          if (responseData.data === null) {
            history.push('/registration')
          } else {
            const userData = { ...responseData.data }

            props.setUserData(userData)
            console.log(responseData);
            console.log(responseData.data.id);
            history.push(`/teacher/${responseData.data.id}`)
          }



        } catch (e) {

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

  const signOut = () => {
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
        props.setUserGData(gUser.g_id, gUser.email, gUser.g_name, gUser.avaUrl, gUser.id_token)
      }

    }, () => console.log('signOut ERR'))
  }

  return (
    <div className="Outh">
      {!props.gUser.g_id && <button onClick={signIn} >Log In</button>}
      {!!props.gUser.g_id && <button onClick={signOut} >Log Out</button>}
    </div>
  )
}


export default Outh;