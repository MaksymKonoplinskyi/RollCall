import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserGData } from '../../redux/google-auth-reduser'
// import Outh from './../Outh/Outh';

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     axios.get(`http://localhost:5001/google`, {
    //          withCredentials: true
    //     })
    //         .then(response => {
    //             debugger
    //             if (response.data.resultCode === 0) {
    //                 let { id, email} = response.data.data;
    //                 this.props.setUserData(id, email);
    //             }

    //             // this.props.toggleIsFetching(false)

    //         })
    // }
    render() {
        return <Header {...this.props} />
    }

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setUserGData })(HeaderContainer);