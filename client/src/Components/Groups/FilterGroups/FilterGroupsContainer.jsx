
import { connect } from 'react-redux';
import { setUserData } from '../../../redux/google-auth-reduser';

// import { setUserData } from '../../redux/google-auth-reduser';

import FilterGroups from './FilterGroups';


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

const FilterGroupsContainer = connect(mapStateToProps, mapDispatchToProps)(FilterGroups)


export default FilterGroupsContainer