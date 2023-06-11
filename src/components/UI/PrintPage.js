import { useRef, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Pagination, Stack } from "@mui/material";

import CreatePrint from "./CreatePrint";
import ReactToPrint from "react-to-print";
import handlePrintPage from "../UI/PAGE_PRINT";
import handlePreviewPage from "../UI/PAGE_PREVIEW";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaginationItem-root": {
      color: "black",
      fontWeight: "700",
      fontSize: "24px",

      "&:hover": {
        color: "white",
        backgroundColor: "green",
      },
    },
  },
  PageOuterContainer: {
    display: "flex",
    flexDirection: "row",
    height: "1300px",
    width: "70%",
    border: "1px solid blue",
    backgroundColor: "#c40a0a",
    padding: "0",
    margin: "0 auto 5% auto",
    alignContent: "center",
    justifyContent: "center",
  },
  PageInnerContainer: {
    display: "flex",
    alignContent: "flex-start",
    background: "#FFF",
    height: "290mm",
    width: "205mm",
    padding: "2mm 0 0 5mm",
    margin: "0",
  },
  paginationContainer: {
    display: "flex",
    backgroundColor: "#4472C4",
    borderRadius: "25px",
    maxWidth: "75%",
    color: "blue",
    flexGrow: "1",
    justifyContent: "center",
    alignContent: "center",
  },
}));

let PrintPage = (props) => {
  const classes = useStyles();
  const componentRef = useRef();

  const [page, setPage] = useState(1);
  const [size, setSize] = useState("10");

  function handlePage(event, value) {
    setPage(value);
  }

  console.log(page);

  return (
    <Grid item container className={classes.PageOuterContainer}>
      <span style={{ position: "absolute" }}>
        <Chip
          label="size 8"
          style={{ backgroundColor: size === "8" ? "#2e7d32" : "#fff" }}
          variant={size === "10" && "outlined"}
          onClick={(e) => setSize("8")}
        />
        <Chip
          label="size 10"
          style={{ backgroundColor: size === "10" ? "#2e7d32" : "#fff" }}
          variant={size === "8" && "outlined"}
          onClick={(e) => setSize("10")}
        />
      </span>
      <Grid
        item
        container
        className={classes.PageInnerContainer}
        ref={componentRef}
      >
        {[...Array(36).keys()].map((components, index) => {
          return (
            <CreatePrint
              key={index * 100}
              title={props.title}
              size_uk={size === "8" ? (page + 3) * 2 : (page + 4) * 2}
              size_eu={size === "8" ? (page + 17) * 2 : (page + 18) * 2}
              size_us={size === "8" ? (page + 1) * 2 : (page + 2) * 2}
              us_styles={
                size === "8" ? (page < 4 ? "3px" : "0") : page < 3 ? "3px" : "0"
              }
              uk_styles={size === "8" ? (page < 2 ? "3px" : "0") : "0"}
              colour={props.colour}
              circle={props.circle}
            />
          );
        })}
      </Grid>
      <Grid item container>
        <Grid item container className="printButtonContainer">
          <ReactToPrint
            xs={8}
            trigger={() => (
              <button className="printButton">Preview - Page</button>
            )}
            pageStyle={`@media print { @page { size: 8.071in 11.42in ;  margin-left: 2mm ; margin-bottom: 5mm; margin-top: 0; margin-right: 0; } }`}
            content={() => componentRef.current}
            // print={handlePreviewPage}
          />
        </Grid>
      </Grid>
      <Grid item container className={classes.paginationContainer}>
        <Stack spacing={2}>
          <Pagination
            className={classes.root}
            count={size === "8" ? 13 : 12}
            color="primary"
            page={page}
            onChange={handlePage}
            size="large"
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PrintPage;
