import React from 'react';
import propTypes from 'prop-types';
import './styles.scss'

const InputField = ({value, searchHandler}) => {
    return (
        <div className="input-container">
            <input className="input" onChange={searchHandler} value={value} placeholder="Search"/>
        </div>
    )
}

InputField.propTypes = {
    value : propTypes.string.isRequired,
    searchHandler : propTypes.func.isRequired
}

export default InputField;