import React from "react";
import { Container, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import FormCreation from "./components/FormCreation";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      {/* Navbar always on left side */}
      <Navbar />

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Header />
        <Container>
          <FormCreation />
        </Container>
      </Box>
    </div>
  );
};

export default App;
