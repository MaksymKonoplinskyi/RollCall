import { useEffect, useState } from 'react';
import { getGroups } from '../../../http/userAPI';



function FilterGroups(props) {
    const [groups, setGroups] = useState(null)

    useEffect(() => {
        const loadAllGroups = async () => {
            const response = await getGroups()
            setGroups(response.data)
            console.log(groups);
        };
    }, [])


    return (
        <div>
            {/* <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>

                    <div >
                        <NavLink to={'/profile/' + u.id}>{
                            <img src={u.photos.small != null ? u.photos.small : anonymUserPhoto}
                                className={s.userPhoto} alt="" />
                        }</NavLink>


                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'dd8dd8af-bcfd-4fbd-a425-5716f79d2fc5'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })




                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'dd8dd8af-bcfd-4fbd-a425-5716f79d2fc5'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })



                            }}>Follow</button>}

                    </div>

                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>

                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>

                        </span>
                    </span>
                </div>
                )
            } */}
        </div>
    )
}
export default FilterGroups
