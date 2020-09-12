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
    validate: (values) => {
      let error = {};
      if (!values.email) error.email = "email required";
      if (!values.password) error.password = "enter password";

      return error;
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
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : (
            ""
          )}
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
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : (
            ""
          )}
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
