import { connect } from 'react-redux';
import CreateGroup from './CreateGroup';


const mapStateToProps = (state) => {
    return {
        g_id: state.auth.gUser.g_id,
        g_name: state.auth.gUser.g_name,
        email: state.auth.gUser.email,
        id_token: state.auth.gUser.id_token
        

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // setUserData: () => {
        //     dispatch(setUserData())
            //  setUserData: () => {
            //     dispatch(setUserData())
        // },

    }
}

const CreateGroupContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGroup)


export default CreateGroupContainer
