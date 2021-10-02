import React, { useEffect, useState } from 'react';
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
                case 'isName':
                    const re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
                    re.test(String(value)) ? setNameError(false) : setNameError(true)
                    break;
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


const RegStudent = (props) => {
    const email = useInput('', { isEmpty: true, minLength: 3 })
    const password = useInput('', { isEmpty: true, minLength: 5 })

    return (
        <div>

            <form>
                <h2>Регистрация студента</h2>
                <p>Введите Ваши данные:</p>
                <p>Фамилия:</p>
                {(email.isDirty && email.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
                {(email.isDirty && email.minLengthError) && <div style={{ color: 'red' }}>Не корректная длинна</div>}
                <input onChange={(e) => email.onChange(e)} onBlur={(e) => email.onBlur(e)} value={email.value} name='email' type='text' placeholder='Ente your email...' />
                <br />
                <br />
                {(password.isDirty && password.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
                {(password.isDirty && password.minLengthError) && <div style={{ color: 'red' }}>Не корректная длинна</div>}
                <input onChange={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)} value={password.value} name='password' type='password' placeholder='Ente your password...' />
                <button disabled={!email.inputValid || !password.inputValid} type='submit'>Registration</button>
            </form>




            <div>

            </div>
        </div>
    )
}

// const Student = sequelize.define('student', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     firstName: { type: DataTypes.STRING, allowNull: true },
//     middleName: { type: DataTypes.STRING, },
//     lastName: { type: DataTypes.STRING, allowNull: true },
//     email: { type: DataTypes.STRING, unique: true },
//     //   pass: { type: DataTypes.STRING },
//     role: { type: DataTypes.STRING, defaultValue: 'STUDENT' },
// })

export default RegStudent

