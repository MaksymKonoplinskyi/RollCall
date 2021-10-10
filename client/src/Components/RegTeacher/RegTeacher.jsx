import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { getTeacherData, regTeacher } from '../../http/userAPI';
import useInput from '../useInput';


const RegTeacherPage = (props) => {

    const history = useHistory()
    const [regError, setRegError] = useState(null)

    const firstName = useInput('Максим', { isEmpty: true })
    const middleName = useInput('Анатолиевич', { isEmpty: true })
    const lastName = useInput('Коноплинский', { isEmpty: true })
    const institute = useInput('КПИ', { isEmpty: true })
    const faculty = useInput('ФЕА', { isEmpty: true })
    const department = useInput('ТЕ', { isEmpty: true })
    const position = useInput('Ст.Выкл', { isEmpty: true })


    const regData = {
        g_id: props.g_id,
        firstName: firstName.value,
        middleName: middleName.value,
        lastName: lastName.value,
        institute: institute.value,
        faculty: faculty.value,
        department: department.value,
        position: position.value,
        email: props.email,
        role: "TEACHER",
    }

    const click_regTeacher = async () => {
        try {
            const response = await regTeacher(regData)
            console.log(response);

            const responseData = await getTeacherData(props.g_id)
            const userData = { ...responseData.data }
            props.setUserData(userData)
            alert('Teacher registration successful, id=' + responseData.data.id)
            console.log('Teacher registration successful, id=' + responseData.data.id);
            history.push(`/teacher/${responseData.data.id}`)
        } catch (e) {
            alert(e.response.data.message)
            setRegError(e.response.data.message)
        }
    }


    const click_get = async () => {
        try {
            const response = await getTeacherData(props.g_id)
            debugger
            console.log(response);
            console.log(response.data.id);
            // history.push(`/teacher/${response.data.id}`)
        } catch (e) {
            alert(e.response.data.message)
            setRegError(e.response.data.message)
        }
    }


if (!props.g_id) return <Redirect to={'/auth'} />;

    return (
        <div>

            <form>
                <h2>Регистрация преподавателя</h2>
                <p>Ваш аккаун будет привязан к електронной почте: {props.email} и соответствующему гугл аккаунту.</p>
                <p>Вход будет возможен только через этот аккаунт. Если хотите зарегистрироваться с использованием другого аккаунта, смените аккаунт перед регистрацией</p>
                <p>Введите Ваши данные:</p>
                <p>Им'я:</p>
                {(firstName.isDirty && firstName.isEmpty) && <div style={{ color: 'red' }}>Поле не може бути пустим</div>}
                <input onChange={(e) => firstName.onChange(e)} onBlur={(e) => firstName.onBlur(e)} value={firstName.value} name='firstName' type='text' placeholder="Им'я" />
                <br />
                <p>По-батькові:</p>
                {(middleName.isDirty && middleName.isEmpty) && <div style={{ color: 'red' }}>Поле не може бути пустим</div>}
                <input onChange={(e) => middleName.onChange(e)} onBlur={(e) => middleName.onBlur(e)} value={middleName.value} name='middleName' type='text' placeholder='По-батькові' />
                <br />
                <p>Прізвище:</p>
                {(lastName.isDirty && lastName.isEmpty) && <div style={{ color: 'red' }}>Поле не може бути пустим</div>}
                <input onChange={(e) => lastName.onChange(e)} onBlur={(e) => lastName.onBlur(e)} value={lastName.value} name='lastName' type='text' placeholder='Прізвище' />
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
                <p>Посада:</p>
                {(position.isDirty && position.isEmpty) && <div style={{ color: 'red' }}>Поле не може бути пустим</div>}
                <input onChange={(e) => position.onChange(e)} onBlur={(e) => position.onBlur(e)} value={position.value} name='position' type='text' placeholder='Посада' />
                <br />
                <br />

                <button disabled={!firstName.inputValid || !middleName.inputValid || !lastName.inputValid
                    || !institute.inputValid || !faculty.inputValid || !department.inputValid || !position.inputValid}
                    onClick={click_regTeacher} className="btn btn-primary" type='button'>Зарееструватись</button>
                <button onClick={click_get} className="btn btn-primary" type='button'>get</button>
                {/* <button onClick={click_post} className="btn btn-primary" type='button'>post</button> */}
            </form>




            <div>
                {(regError) && <div style={{ color: 'red' }}>Помилка реестрації:{regError}</div >}
            </div>
        </div >
    )
}


export default RegTeacherPage

