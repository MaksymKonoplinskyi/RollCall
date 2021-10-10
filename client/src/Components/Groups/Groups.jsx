import React from 'react'
import MyGroupContainer from './MyGroup/MyGroupContainer'
import MyGroupsContainer from './MyGroups/MyGroupsContainer'
import AllGroupsContainer from './AllGroups/AllGroupsContainer'
import FindGroupContainer from './FindGroup/FindGroupContainer'
import CreateGroupContainer from './CreateGroup/CreateGroupContainer'

function Groups(props) {

    return (
        <div>
            <MyGroupContainer tData={props.tData} gUser={props.gUser} />
            <MyGroupsContainer tData={props.tData} gUser={props.gUser} />
            <AllGroupsContainer tData={props.tData} gUser={props.gUser} />
            <FindGroupContainer tData={props.tData} gUser={props.gUser} />
            <CreateGroupContainer tData={props.tData} gUser={props.gUser} />
        </div>
    )
}

export default Groups
