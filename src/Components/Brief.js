import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Brief = () => {
  return (
    <Box
    sx={{
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundImage:
          'url("https://www.analyticabi.app/Frontend/Visitor/HomePage/Images/landing-bg2.svg")',
        marginRight: "0",
        marginLeft: "0",
        overflow: "auto",
        marginTop: "0px",
      }}
    >
      <Box
        sx={{
          height: "70vh",
          position: "relative",
          marginRight: "0",
          marginLeft: "0",
          overflow: "auto",
          width: "100%",
          marginTop: "10vh",
          marginBottom: "auto",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            mr: "35%",
            display: { md: "flex" },
            marginLeft: "5%",
            marginTop: "auto",
            marginBottom: "auto",
            height: "inherit",
            alignItems: "center",
          }}
        >
          Ogive is In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. Lorem
          ipsum may be used as a placeholder before the final copy is available.
        </Typography>
      </Box>
    </Box>
  );
};
