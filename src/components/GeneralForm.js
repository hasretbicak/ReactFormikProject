import React from "react";

import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, action) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  action.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Email"
            className={errors.email ? "input-error" : ""}
          ></input>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputDiv">
          <label>Age</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder="Age"
            className={errors.age ? "input-error" : ""}
          ></input>
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label>Password</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Please enter your password"
            className={errors.password ? "input-error" : ""}
          ></input>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label>Confirm Password</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            placeholder="Please enter your password again"
            className={errors.confirmPassword ? "input-error" : ""}
          ></input>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button disabled={isSubmitting} type="submit">
          Save
        </button>
      </form>
      <Link className="formLink" to="/portal">
        Go To Portal Form
      </Link>
    </div>
  );
}

export default GeneralForm;
