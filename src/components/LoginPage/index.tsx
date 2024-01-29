import { Form, ErrorMessage, useFormik, FormikHelpers } from "formik";
import { myValidationSchema } from "../Schemas/LoginPageSchema";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { styles } from "./styles";
import HeaderComponent from "../HeaderComponent ";
import React from "react";

type LoginValues = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useNavigate();

  const onSubmit = async (
    values: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log("submitted");
    navigate("/Projects");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: myValidationSchema,
    onSubmit,
  });

  console.log(formik);

  return (
    <Box sx={styles.componentContainer}>
      <HeaderComponent />
      <Box sx={styles.formContainer}>
        <Paper elevation={16} square={false} sx={styles.paper}>
          <Typography variant="h4" component="h4" sx={styles.typography}>
            User Login
          </Typography>
          <Form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextField
              variant="outlined"
              margin="normal"
              name="username"
              type="username"
              placeholder="Please enter your Username"
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={
                formik.touched.username
                  ? formik.errors.username
                  : "Please give a valid Username"
              }
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.errors.username ? "input-error" : ""}
            />

            <ErrorMessage name="username" />
            <TextField
              variant="outlined"
              margin="normal"
              name="password"
              type="password"
              placeholder="Please enter your Password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={
                formik.touched.password
                  ? formik.errors.password
                  : "Please give a valid Password"
              }
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.password && formik.errors.password
                  ? "input-error"
                  : ""
              }
            />
            <ErrorMessage name="password" />
            <Button type="submit" disabled={formik.isSubmitting}>
              Submit
            </Button>
          </Form>
        </Paper>
      </Box>
    </Box>
  );
}
