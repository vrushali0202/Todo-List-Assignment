import { Container, Grid } from "@mui/material";
import React from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const Main = () => {
  return (
    <Container maxWidth="sm">
      {/* <Grid container spacing={2}>
        <Grid item xs={6}>
          <LoginPage />
        </Grid>
        <Grid item xs={6}>
          <SignupPage />
        </Grid>
      </Grid> */}

      Welcome to my page
    </Container>
  );
};

export default Main;
