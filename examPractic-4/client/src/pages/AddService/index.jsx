import React from "react";
import style from "./index.module.css";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { postService } from "../../api/httpRequests";
import { useNavigate } from "react-router-dom";
import { addServiceSchema } from "../../validation/addServiceValidatio";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddService = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      iconName: "",
      title: "",
      desc: "",
    },
    validationSchema: addServiceSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values, actions) {
    postService(values);
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Posted!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
    actions.resetForm();
  }
  return (
    <>
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <section id={style.add}>
        <h1 className="text-uppercase mb-4">Add Service</h1>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <TextField
            value={formik.iconName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            style={{ marginTop: "20px", width: "300px" }}
            name="iconName"
            type="text"
            id="standard-basic"
            label="Icon Name"
            variant="standard"
            error={
              formik.errors.iconName && formik.touched.iconName ? true : false
            }
          />
          {formik.errors.iconName && formik.touched.iconName && (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.iconName}
            </p>
          )}
          <TextField
            value={formik.title}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            name="title"
            type="text"
            style={{ marginTop: "20px", width: "300px" }}
            id="standard-basic"
            label="Title"
            variant="standard"
            error={formik.errors.title && formik.touched.title ? true : false}
          />
          {formik.errors.title && formik.touched.title && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.title}</p>
          )}
          <TextField
            value={formik.desc}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            name="desc"
            style={{ marginTop: "20px", width: "300px" }}
            type="text"
            id="standard-basic"
            label="Description"
            variant="standard"
            error={formik.errors.desc && formik.touched.desc ? true : false}
          />
          {formik.errors.desc && formik.touched.desc && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.desc}</p>
          )}
          <Button
            style={{ marginTop: "20px", width: "200px" }}
            type="submit"
            color="success"
            variant="contained"
          >
            Add
          </Button>
        </form>
      </section>
    </>
  );
};

export default AddService;
