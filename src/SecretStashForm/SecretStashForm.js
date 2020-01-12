import React from 'react';
import './SecretStashForm.css'

export default function SecreStashForm(props) {
    const { className, ...otherProps } = props
    return (
        <form
            className={['SecretStash-form', className].join(' ')}
            action='#'
            {...otherProps}
        />
    )
}