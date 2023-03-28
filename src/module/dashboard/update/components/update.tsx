import React, { useState } from "react";

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
import { MyData } from "../../post/modal";
import { toast } from "react-toastify";

interface IProps {
  FormData: MyData;
  onDismiss: () => void;
}

export const UpdateForm: React.FC<IProps> = ({ FormData, onDismiss }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState("Please Wait");
  const handleSubmit = async (
    values: MyData,
    { setSubmitting }: FormikHelpers<MyData>
  ) => {
    await axios
      .put(`http://localhost:5000/api/blog/${FormData?._id}`, values,
      
       )
      .then(() => {
        toast.success("Update Successfully");
      })
      .then(() => {
        if (onDismiss) onDismiss();
      });
    setSubmitting(false);
    // setUpdateData(values)
  };

  return (
    <Formik
      initialValues={{
        title: FormData?.title,
        body: FormData?.body,
      }}
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
          <ApTextInput
            type="textarea"
            label="Enter Article"
            name="body"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />

          {/* <ApTextEditor label="Text editor" name="article" /> */}

          {/* <button type="submit" disabled={isSubmitting}>
            Update
          </button> */}

          <ApButton
            type="submit"
            title="Update"
            loading={loading}
            color="secondary"
            loadingText={loadingText}
            btnSize="sm"
            rounded="rounded-md"
          />
        </Form>
      )}
    </Formik>
  );
};
