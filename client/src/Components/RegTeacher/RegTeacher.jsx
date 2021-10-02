import React, { useEffect, useState } from 'react';
import OuthContainer from '../Outh/OuthContainer';
// import s from './'
const useValidation = (value, validations) => {
    const [isEmpty, setEmptyError] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isName, setNameError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmptyError(false) : setEmptyError(true)
                    break;
                // case 'isName':
                //     const re = /([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\']{1}[A-Z]{1}[a-z]{1,30}){2,5}/
                //     re.test(toString(value)) ? setNameError(false) : setNameError(true)
                //     break;
            }
        }
    }, [value])
    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError || isName) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxLengthError, isName])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        isName,
        inputValid
    }

}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }

}

    

const RegTeacher = (props) => {

    const firstName = useInput('Максим', { isEmpty: true })
    const middleName = useInput('Анатолиевич', { isEmpty: true })
    const lastName = useInput('Коноплинский', { isEmpty: true })
    const institute = useInput('КПИ', { isEmpty: true })
    const faculty = useInput('ФЕА', { isEmpty: true })
    const department = useInput('ТЕ', { isEmpty: true })
    const position = useInput('Ст.Выкл', { isEmpty: true })
    // const email = useInput('', { isEmpty: true, minLength: 3 })
    // const password = useInput('', { isEmpty: true, minLength: 5 })
    

    return (
        <div>

            <form>
                <h2>Регистрация преподавателя</h2>
                <p>Ваш аккаун будет привязан к електронной почте: {props.email} и соответствующему гугл аккаунту.</p>
                <p>Вход будет возможен только через этот аккаунт. Если хотите зарегистрироваться с использованием другого аккаунта, нажмите <OuthContainer /> и после этого войдите с другого аккаунта</p>
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
                {/* {(email.isDirty && email.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
                {(email.isDirty && email.minLengthError) && <div style={{ color: 'red' }}>Не корректная длинна</div>}
                <input onChange={(e) => email.onChange(e)} onBlur={(e) => email.onBlur(e)} value={email.value} name='email' type='text' placeholder='Ente your email...' />
                <br />
                <br />
                {(password.isDirty && password.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
                {(password.isDirty && password.minLengthError) && <div style={{ color: 'red' }}>Не корректная длинна</div>}
                <input onChange={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)} value={password.value} name='password' type='password' placeholder='Ente your password...' /> */}

                <button disabled={!firstName.inputValid || !middleName.inputValid || !lastName.inputValid 
                    || !institute.inputValid || !faculty.inputValid || !department.inputValid 
                    || !position.inputValid} className="btn btn-primary" type='submit'>Зарееструватись</button>
            </form>




            <div>

            </div>
        </div>
    )
}

// const Teacher = sequelize.define('teacher', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     firstName: { type: DataTypes.STRING, allowNull: true },
//     middleName: { type: DataTypes.STRING, allowNull: true },
//     lastName: { type: DataTypes.STRING, allowNull: true },
//     //  groups: {type: DataTypes.STRING,},
//     department: { type: DataTypes.STRING, },
//     faculty: { type: DataTypes.STRING, },
//     institute: { type: DataTypes.STRING, },
//     email: { type: DataTypes.STRING, unique: true, },
//     role: { type: DataTypes.STRING, defaultValue: 'TEACHER' },
// })

export default RegTeacher
