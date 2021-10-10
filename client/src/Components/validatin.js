import { useEffect, useState } from 'react';

 const useValidation = (value, validations) => {
    const [isEmpty, setEmptyError] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
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
                default: break;
            }
        }
    }, [value, validations])
    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxLengthError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        inputValid
    }

}

export default useValidation