import React from 'react'
import Profile from './TeacherProfile'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { setUserProfile } from '../../redux/profileReduser'
import TeacherProfile from './TeacherProfile';

class TeacherProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {

                this.props.setUserProfile(response.data)

            })
    }
    render() {

        return (

            <div>
                <TeacherProfile {...this.props} profile={this.props.profile} />
            </div>
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(TeacherProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)
