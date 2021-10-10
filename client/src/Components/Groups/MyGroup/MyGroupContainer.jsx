
import { connect } from 'react-redux';
import { setUserData } from '../../../redux/google-auth-reduser';

// import { setUserData } from '../../redux/google-auth-reduser';

import MyGroap from './MyGroup';


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

const MyGroupContainer = connect(mapStateToProps, mapDispatchToProps)(MyGroap)


export default MyGroupContainer