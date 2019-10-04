import React from 'react'
import {connect} from "react-redux"
import {newFeature} from "store/feature/actions"
import {Form, Field} from 'react-final-form'
import css from './Features.module.css'

const NewFeaturePage = props => {
    const {newFeature, history} = props

    const onSubmit = async values => {
        newFeature(values)

        history.push('/')
    }

    return <div>
        <h1>New feature</h1>

        <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({handleSubmit, form, submitting, pristine}) => (
                <form onSubmit={handleSubmit} className={css.form}>
                    <div>
                        <label>Feature Name</label>
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="name"
                        />
                    </div>
                    <div>
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>

                </form>
            )}
        />
    </div>
}

export default {component: connect(null, {newFeature})(NewFeaturePage)}
