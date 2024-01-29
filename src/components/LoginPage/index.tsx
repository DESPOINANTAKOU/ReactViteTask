import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router";
import { validationSchema } from "../../Schemas/LoginComponentSchema"
import { Button, Paper, TextField, Typography, Box } from "@mui/material";
import { styles } from "./styles";
import Header from "../Header";

type LoginValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.mainContainer}>
      <Header />
      <Box sx={styles.loginContainer}>
        <Paper elevation={16} square={false} sx={styles.paper}>
          <Typography variant="h4" component="h4" sx={styles.typography}>
            User Login
          </Typography>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values: LoginValues) => {
              console.log(values);
              navigate("/Projects");
            }}
          >
            {({ values, handleChange, handleSubmit, handleBlur }) => (
              <Form onSubmit={handleSubmit}>
                <TextField
                  sx={styles.textField}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="username"
                  type="text"
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="username"
                />
                <div>
                  <ErrorMessage name="username" />
                </div>
                <TextField
                  sx={styles.textField}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="password"
                  type="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                />
                <div>
                  <ErrorMessage name="password" />
                </div>
                <Box sx={styles.button}>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginForm;