import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Not Found</title>
      </Helmet>
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
          backgroundColor: "rgba(0, 0, 0, 0.171)",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>Not Found</h1>
      </section>
    </>
  );
};

export default NotFound;
