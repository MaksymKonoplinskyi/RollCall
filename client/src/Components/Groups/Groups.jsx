import React from 'react'
import MyGroupContainer from './MyGroup/MyGroupContainer'
import MyGroupsContainer from './MyGroups/MyGroupsContainer'
import FindGroupContainer from './FindGroup/FindGroupContainer'
import CreateGroupContainer from './CreateGroup/CreateGroupContainer'
import FilterGroupsContainer from './FilterGroups/FilterGroupsContainer'

function Groups(props) {

    return (
        <div>
            <MyGroupContainer tData={props.tData} gUser={props.gUser} />
            <MyGroupsContainer tData={props.tData} gUser={props.gUser} />
            <FilterGroupsContainer tData={props.tData} gUser={props.gUser} />
            <FindGroupContainer tData={props.tData} gUser={props.gUser} />
            <CreateGroupContainer tData={props.tData} gUser={props.gUser} />
        </div>
    )
}

export default Groups
