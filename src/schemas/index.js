import * as yup from "yup";
const passwordRules = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Entering your email is mandatory"),

  age: yup
    .number()
    .positive("Please enter your correct age")
    .integer("Please enter your correct age")
    .required("Entering your age is mandatory"),

  password: yup
    .string()
    .min(5, "Please enter minimum 5 characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number.",
    })
    .required("Entering your password is mandatory"),

  confirmPassword: yup

    .string()
    .oneOf([yup.ref("password")], "Passwords are not the same")
    .required("It is mandatory to enter the same password"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username enter minimum 5 characters")
    .required("Entering your username is mandatory"),

  university: yup
    .string()
    .oneOf(["Bogazici", "GSU", "ODTU", "ITU"], 'Please select your university')
    .required("Entering your university is mandatory"),

  isAccepted: yup
    .boolean()
    .oneOf([true], "Please accept the terms of use")
});