import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at most 20 characters")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Username must only contain alphanumeric characters"
    )
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character. No sequential or repeated characters allowed."
    )
    .test(
      "no-sequential-characters",
      "Password must not contain sequential characters.",
      (value) => {
        if (typeof value === "undefined") {
          return false;
        }
        for (let i = 0; i < value.length - 2; i++) {
          const currentCharCode = value.charCodeAt(i);
          const nextCharCode = value.charCodeAt(i + 1);
          const nextNextCharCode = value.charCodeAt(i + 2);
          if (
            (currentCharCode === nextCharCode - 1 &&
              nextCharCode === nextNextCharCode - 1) ||
            (currentCharCode === nextCharCode &&
              currentCharCode === nextNextCharCode)
          ) {
            return false;
          }
        }
        return true;
      }
    )
    .required("Password is required"),
});

export default validationSchema;