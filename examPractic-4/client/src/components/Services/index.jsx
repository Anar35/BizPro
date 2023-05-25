import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { deleteById, getAll } from "../../api/httpRequests";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getAll().then((data) => setServices(data));
  }, [setServices]);

  return (
    <section id="services">
      <div className="container">
        <div className="text-center">
          <h1 className="titleh1">About Our bizpro</h1>
          <p
            style={{
              color: "rgb(111, 111, 111)",
              width: "75%",
              margin: "60px auto 0",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
        <div className="search">
          <TextField
            onChange={(e) => {
              getAll(e.target.value).then((data) => setServices(data));
            }}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            type="text"
          />
        </div>
        <Grid style={{ marginTop: "50px" }} container spacing={2}>
          {services &&
            services.map((service) => (
              <Grid key={service._id} item lg={3} md={6} sm={12}>
                <Card
                  className={`serviceCard ${style.card}`}
                  sx={{
                    maxWidth: 345,
                    boxShadow: "none",
                    marginBottom: "20px",
                  }}
                >
                  <i id="icon" className={service.iconName}></i>
                  <CardContent style={{ padding: "0", border: "0" }}>
                    <Typography
                      className={style.cardTitle}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      className={style.cardDesc}
                      variant="body2"
                      color="text.secondary"
                    >
                      {service.desc}
                    </Typography>
                  </CardContent>
                  <CardActions className="text-center">
                    <button className={style.cardBtn}>More Details</button>
                  </CardActions>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteById(service._id);
                          setServices(
                            services.filter((x) => x._id != service._id)
                          );
                          Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                          );
                        }
                      });
                    }}
                    style={{ margin: "0 auto", width: "148px" }}
                    className={style.cardBtn}
                  >
                    Delete
                  </button>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services;
