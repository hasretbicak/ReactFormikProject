import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';

function PortalForm() {
  const onSubmit = async (value, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: "false" }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
              label="User Name"
              name="username"
              type="text"
              placeholder="Username"
            />
            <CustomSelect
              label="Your University"
              name="university"
              placeholder="Select your university"
            >
              <option value="">Please select your university</option>
              <option value="Bogazici">Bogazici University</option>
              <option value="GSU">Galatasaray University</option>
              <option value="ODTU">ODTU</option>
              <option value="ITU">ITU</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
            <Link className="formLink" to="/">
              Go To Main Form
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
