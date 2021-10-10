import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router';
import { getGroups, regGroup } from '../../../http/userAPI';
import { setUserData } from '../../../redux/google-auth-reduser';
import useInput from '../../useInput';
import s from './CreateGroup.module.css';



const CreateGroup = (props) => {

    const history = useHistory()
    const [regResult, setRegResult] = useState(null)
    const [regResultCode, setRegResultCode] = useState(null)

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
            setRegResult(response.data.groupName)
            setRegResultCode(response.status)
            // const responseData = await getAllGroup(props.g_id)
            // const userData = { ...responseData.data }
            // props.setUserData(userData)
            // alert('Group registration successful, id=' + responseData.data.id)
            // console.log('Teacher registration successful, id=' + responseData.data.id);
            // history.push(`/teacher/${responseData.data.id}`)
        } catch (e) {
            setRegResult(e.response.data.message)
            setRegResultCode(e.response.status)
        }
    }


    const click_get = async () => {
        try {
            const response = await getGroups(props.g_id)
            console.log(response);
            console.log(response.data.id);
            // history.push(`/teacher/${response.data.id}`)
        } catch (e) {
            setRegResult(e.response.data.message)
            setRegResultCode(e.response.status)
        }
    }


    // if (!props.g_id) return <Redirect to={'/auth'} />;

    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
            >
                <Card style={{ width: 400 }} className="p-4">
                    <Form>
                        <h2 className={s.h_p}>Реєстрація групи</h2>
                        <p className={s.p}>Обовязково спочатку переконайтеся що группа ще не зареєстрована</p>
                        <p>
                            Група:{(groupName.isDirty && groupName.isEmpty) && <span style={{ color: 'red' }}>Поле не може бути пустим</span>}
                            <input className={s.input} onChange={(e) => groupName.onChange(e)} onBlur={(e) => groupName.onBlur(e)} value={groupName.value} name='groupName' type='text' placeholder="Назва группи, наприклад КВ01" />
                        </p>
                        <p>
                            Інститут:{(institute.isDirty && institute.isEmpty) && <span style={{ color: 'red' }}>Поле не може бути пустим</span>}

                            <input className={s.input} onChange={(e) => institute.onChange(e)} onBlur={(e) => institute.onBlur(e)} value={institute.value} name='institute' type='text' placeholder='Інститут' />
                        </p>
                        <p>
                            Факультет:{(faculty.isDirty && faculty.isEmpty) && <span style={{ color: 'red' }}>Поле не може бути пустим</span>}

                            <input className={s.input} onChange={(e) => faculty.onChange(e)} onBlur={(e) => faculty.onBlur(e)} value={faculty.value} name='faculty' type='text' placeholder='Факультет' />
                        </p>
                        <p>
                            Кафедра:{(department.isDirty && department.isEmpty) && <span style={{ color: 'red' }}>Поле не може бути пустим</span>}

                            <input className={s.input} onChange={(e) => department.onChange(e)} onBlur={(e) => department.onBlur(e)} value={department.value} name='department' type='text' placeholder='Кафедра' />
                        </p>

                        <span>
                            {(regResultCode === 200) && <span style={{ color: 'green' }}>Группа {regResult} успішно зареестрована</span >}
                            {(regResultCode === 404) && <span style={{ color: 'red' }}>Помилка реестрації: {regResult}</span >}
                            {!(regResultCode === 404 || regResultCode === 200 || regResultCode === null)
                                && <span style={{ color: 'red' }}>Невідома помилка реестрації:{regResult}</span >}
                        </span>
                        <Button className={s.button} disabled={!groupName.inputValid || !institute.inputValid || !faculty.inputValid || !department.inputValid}
                            onClick={click_сreateGroup} variant="success" >Зарееструвати группу</Button>
                        <button onClick={click_get} className="btn btn-primary" type='button'>get</button>
                        {/* <button onClick={click_post} className="btn btn-primary" type='button'>post</button> */}
                    </Form>





                </Card >

            </Container>
        </div >
    )
}


export default CreateGroup




