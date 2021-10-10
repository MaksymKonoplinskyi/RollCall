import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { getAllGroup, regGroup } from '../../../http/userAPI';
import useInput from '../../useInput';



const CreateGroup = (props) => {

    const history = useHistory()
    const [regError, setRegError] = useState(null)

    const groupName = useInput('КВ01', { isEmpty: true })
    const institute = useInput('КПИ', { isEmpty: true })
    const faculty = useInput('ФПМ', { isEmpty: true })
    const department = useInput('СПСКС', { isEmpty: true })


    const regData = {
        groupName: groupName.value,
        institute: institute.value,
        faculty: faculty.value,
        department: department.value,
        groupLeaderId: null,
        criator_g_id: props.g_id,
    }
    // debugger



    const click_сreateGroup = async () => {
        try {
            const response = await regGroup(regData)
            console.log(response);

            // const responseData = await getAllGroup(props.g_id)
            // const userData = { ...responseData.data }
            // props.setUserData(userData)
            // alert('Group registration successful, id=' + responseData.data.id)
            // console.log('Teacher registration successful, id=' + responseData.data.id);
            // history.push(`/teacher/${responseData.data.id}`)
        } catch (e) {
            alert(e.response.data.message)
            setRegError(e.response.data.message)
        }
    }


    const click_get = async () => {
        try {
            const response = await getAllGroup(props.g_id)
            console.log(response);
            console.log(response.data.id);
            // history.push(`/teacher/${response.data.id}`)
        } catch (e) {
            alert(e.response.data.message)
            setRegError(e.response.data.message)
        }
    }


    // if (!props.g_id) return <Redirect to={'/auth'} />;

    return (
        <div>
            <div >
                Создать группу
            </div >
            <form>
                <h2>Регистрация группы</h2>
                <p>Как преподаватель Вы можете зарегистрировать новую группу, но перед этим обязательно убедитесь что такая группа еще не зарегистрирована. Это крайне важно для правильной работы системы.</p>
                <p>Введите данные группы:</p>
                <p>Назва группи:</p>
                {(groupName.isDirty && groupName.isEmpty) && <div style={{ color: 'red' }}>Поле не може бути пустим</div>}
                <input onChange={(e) => groupName.onChange(e)} onBlur={(e) => groupName.onBlur(e)} value={groupName.value} name='firstName' type='text' placeholder="Им'я" />
                <br />
                <p>Інститут:</p>
                {(institute.isDirty && institute.isEmpty) && <div style={{ color: 'red' }}>Поле не може бути пустим</div>}
                <input onChange={(e) => institute.onChange(e)} onBlur={(e) => institute.onBlur(e)} value={institute.value} name='institute' type='text' placeholder='Інститут' />
                <br />
                <p>Факультет:</p>
                {(faculty.isDirty && faculty.isEmpty) && <div style={{ color: 'red' }}>Поле не може бути пустим</div>}
                <input onChange={(e) => faculty.onChange(e)} onBlur={(e) => faculty.onBlur(e)} value={faculty.value} name='faculty' type='text' placeholder='Факультет' />
                <br />
                <p>Кафедра:</p>
                {(department.isDirty && department.isEmpty) && <div style={{ color: 'red' }}>Поле не може бути пустим</div>}
                <input onChange={(e) => department.onChange(e)} onBlur={(e) => department.onBlur(e)} value={department.value} name='department' type='text' placeholder='Кафедра' />
                <br />


                <button disabled={!groupName.inputValid || !institute.inputValid || !faculty.inputValid || !department.inputValid }
                    onClick={click_сreateGroup} className="btn btn-primary" type='button'>Зарееструвати группу</button>
                <button onClick={click_get} className="btn btn-primary" type='button'>get</button>
                {/* <button onClick={click_post} className="btn btn-primary" type='button'>post</button> */}
            </form>




            <div>
                {(regError) && <div style={{ color: 'red' }}>Помилка реестрації:{regError}</div >}
            </div>
        </div >
    )
}


export default CreateGroup




