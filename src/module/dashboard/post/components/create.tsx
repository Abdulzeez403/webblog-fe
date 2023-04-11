import { ApButton } from "@/components/button";
import { ApTextInput } from "@/components/input";
import { ApTextEditor } from "@/components/input/TextEditor";
import axios from "axios";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";
import { MyData } from "../modal";

interface IProps {
  data?: MyData;
}

export const CreatePost: React.FC<IProps> = ({ data }) => {
  const [user, setUser] = useState<any>({} as any);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") as any);
    setUser(currentUser);
  }, []);
  const handleSubmit = async (
    values: MyData,
    { setSubmitting }: FormikHelpers<MyData>
  ) => {
    try {
      await axios
        .post("http://localhost:5000/api/blog/" + user?.id, values)
        .then(() => {
          toast.success("Post Successfully");
        });
    } catch (error) {
      console.error(error);
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ title: "", body: "", description: "", author: "" }}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <ApTextInput
            type="text"
            label="Enter Title"
            name="title"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />
          {/* <ApTextInput
            type="textarea"
            label="Enter Article"
            name="body"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          /> */}

          <ApTextEditor label="Enter Article" name="body" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white bg-blue-500 rounded-md p-2 px-10 text-lg font-bold"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
