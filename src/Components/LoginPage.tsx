// Install required packages:
// npm install @mui/material @mui/icons-material react-hook-form axios

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
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const API_URL = "https://dummyjson.com/auth/login";
  const { handleSubmit, control } = useForm();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post(API_URL, {
        username: data.username,
        password: data.password,
      });
  
      if (response.status === 200) {
        navigate('/todolist',{ state: { userId: response.data.id }}); 
      } else {
        setLoginError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred while logging in.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack margin={3} width="500px">
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Username" fullWidth {...field} margin="normal" />
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
            Login
          </Button>
          <Link to={"/signup"}>
            <Button variant="contained" color="primary">
              New User
            </Button>
          </Link>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginPage;
