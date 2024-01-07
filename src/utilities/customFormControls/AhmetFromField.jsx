import React from 'react'
import { FormField, Label } from "semantic-ui-react"
import { Field, ErrorMessage } from 'formik'

export function CustomFormField({ label, as, type, name, placeholder, rows, cols }) {
    return (
        <FormField>
            <label>{label}</label>
            <Field as={as} type={type} name={name} placeholder={placeholder} rows={rows} cols={cols} />
            <ErrorMessage name={name} render={error =>
                <Label pointing basic color='red' content={error}>{error}</Label>
            }></ErrorMessage>
        </FormField>
    );
}