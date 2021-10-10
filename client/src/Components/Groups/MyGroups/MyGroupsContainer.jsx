
import { connect } from 'react-redux';
import { setUserData } from '../../../redux/google-auth-reduser';

// import { setUserData } from '../../redux/google-auth-reduser';

import MyGroaps from './MyGroups';


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

const MyGroupsContainer = connect(mapStateToProps, mapDispatchToProps)(MyGroaps)


export default MyGroupsContainer