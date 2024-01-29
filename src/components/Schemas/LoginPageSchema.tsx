import * as Yup from "yup";




export const myValidationSchema   = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at most 20 characters")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Username can only contain alphanumeric characters"
    )
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
});
