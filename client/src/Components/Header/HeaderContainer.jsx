import React from 'react';
import Header from './Header';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setAuthUserDataActionCreator } from '../../redux/auth-reduser'
// import Outh from './../Outh/Outh';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:5000/google`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email} = response.data.data;
                    this.props.setAuthUserData(id, email);
                }

                // this.props.toggleIsFetching(false)

            })
    }
    render() {
        return <Header {...this.props} />
    }

}
const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserDataActionCreator })(HeaderContainer);