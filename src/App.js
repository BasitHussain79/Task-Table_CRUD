import { Container, CssBaseline } from "@mui/material";
import { Fragment } from "react";
import "./App.css";
import Table from "./Components/Table/Table";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Table />
      </Container>
    </Fragment>
  );
}

export default App;
