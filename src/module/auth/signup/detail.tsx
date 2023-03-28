import { ApTextInput } from '@/components/input'
import axios from 'axios';
import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { toast } from 'react-toastify';
import { IAuth } from '../model';

export const SignUpDetail = () => {
// const router = Routes()
    const handleSubmit = async (
        values: IAuth,
        { setSubmitting }: FormikHelpers<IAuth>
      ) => {
        try {
          await axios.post("http://localhost:5000/api/user/Register", values).then(() => {
            toast.success("Registered Successfully");
          });
        } catch (error) {
          console.error(error);
        }
    
        setSubmitting(false);
      };
      
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <ApTextInput
            type="text"
            label="username"
            name="username"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />
        <ApTextInput
            type="text"
            label="Email"
            name="email"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />
          <ApTextInput
            type="text"
            label="password"
            name="password"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />


          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}
