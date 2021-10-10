
import { connect } from 'react-redux';
import { setUserData } from '../../../redux/google-auth-reduser';

// import { setUserData } from '../../redux/google-auth-reduser';

import CreateGroup from './CreateGroup';


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

const CreateGroupContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGroup)


export default CreateGroupContainer