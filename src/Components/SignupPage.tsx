import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const { handleSubmit, control } = useForm();
  const [signupError, setSignupError] = useState("");
  const API_URL = "https://dummyjson.com/users/add";
  // const API_URL = "https://jsonplaceholder.typicode.com/users"

  const onSubmit = async (data: any) => {
  fetch(API_URL, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(console.log);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack margin={3} width="500px">
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Name" fullWidth {...field} margin="normal" />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Email" fullWidth {...field} margin="normal" />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              type="password"
              label="Password"
              fullWidth
              {...field}
              margin="normal"
            />
          )}
        />
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
          <Link to={"/"}>
            <Button variant="contained" color="primary">Back</Button>
          </Link>
        </Stack>
      </Stack>
    </form>
  );
};

export default SignupPage;
