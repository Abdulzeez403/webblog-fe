import { ApTextInput } from "@/components/input";
import axios from "axios";
import { FormikHelpers, Formik, Form } from "formik";
import { signIn, getCsrfToken } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IAuthSignIn } from "../model";

export const SignInDetail = () => {
  // const router = useRouter();
  // const [error, setError] = useState(null);
  // // const handleSubmit = async (
  // //   values: IAuthSignIn,
  // //   { setSubmitting }: FormikHelpers<IAuthSignIn>
  // // ) => {
  // //   try {
  // //     await axios
  // //       .get("http://localhost:5000/api/user/Login")
  // //       .then(() => {
  // //         toast.success("Login Successfully");
  // //         router.push('/dashboard/home')
  // //       });
  // //   } catch (error) {
  // //     console.error(error);
  // //   }

  // //   setSubmitting(false);
  // // };

  const handleSubmit = () => {};
  return (


   
  );
};


// 

{/* <Formik
initialValues={{ email: "", password: "",  tenantKey: ''  }}
// validationSchema={validationSchema}
// onSubmit={handleSubmit}
onSubmit={async (values, { setSubmitting }) => {
  const res = await signIn("credentials", {
    redirect: false,
    email: values.email,
    password: values.password,
    callbackUrl: `${window.location.origin}`,
  });
  // if (res?.error) {
  //   setError(res.error);
  // } else {
  //   setError(null);
  // }
  // if (res.url) router.push(res.url);
  setSubmitting(false);
}}
>
{({ isSubmitting }) => (
  <Form>
    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

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
</Formik> */}
