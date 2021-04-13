import React, { useState } from 'react'
//*rafc patajo para carimport PropTypes from 'prop-types';
import PropTypes from 'prop-types';

export const AdddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length >= 4) {
            setCategories(category => [inputValue, ...category]);
            setInputValue('')
        }
        else alert('4 carateres minimo')
    }

    return (
        // puedes usar el form como contendor prilcipal 
        <form onSubmit={hadleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

//desirle que el prop es oblifgatorio
AdddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired //requiere una funcion
}