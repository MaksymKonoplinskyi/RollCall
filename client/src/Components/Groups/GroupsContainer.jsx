import { connect } from 'react-redux';
import Groups from './Groups';



import { setUserData } from '../../redux/google-auth-reduser';


const mapStateToProps = (state) => {
    return {
        gUser: state.auth.gUser,
        tData: state.auth.tData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: () => {
            dispatch(setUserData())
            //  setUserData: () => {
            //     dispatch(setUserData())
        },

    }
}

const GroupsContainer = connect(mapStateToProps, mapDispatchToProps)(Groups)


export default GroupsContainer