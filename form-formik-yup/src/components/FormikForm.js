import React from "react";
import { useFormik } from "formik";

export const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>
          {" "}
          Email
          <input
            type="text"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Password
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
