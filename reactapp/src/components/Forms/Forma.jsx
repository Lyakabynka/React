import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import './Forma.module.css'

const initialValues = {
    name: '',
    amount: 1,
    price: 0
}

export default function Forma() {

    function submitHandle(values, formikBag)
    {
        console.log(values);
        formikBag.resetForm();
    }

    const PRODUCT_SCHEMA = Yup.object().shape({
        

        name: Yup.string().min(3).max(50, 'too long!').required('name is required'),
        amount: Yup.number().min(1).required(),
        price: Yup.number().min(0)
    })
    
  return (
    <div>
        <h1>Form</h1>
        <Formik initialValues={initialValues} onSubmit={submitHandle} validationSchema={PRODUCT_SCHEMA}>
            { () => <Form>
                <div>
                    <Field name="name" placeholder="Name: "></Field>
                    <ErrorMessage name="name" component={'div'} className='error'/>
                </div>
                <div>
                    <Field name="amount" placeholder="Amount: "></Field>
                    <ErrorMessage name="amount" component={'div'} className='error'/>
                </div>
                <div>
                    <Field name="price" placeholder="Price: "></Field>
                    <ErrorMessage name="price" component={'div'} className='error'/>
                </div>
                <Field type="submit" value="Add" id="add"/>
            </Form> }
        </Formik>
    </div>
  )
}
