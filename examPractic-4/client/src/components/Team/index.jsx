import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="text-center">
          <h1 className="titleh1">Meet Our Team</h1>
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
        <Grid style={{ marginTop: "50px" }} container>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: "none",
                borderRadius: "0",
                backgroundColor: "#e6e6e6",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="260"
                image="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp"
              />
              <CardContent
                style={{ padding: "5px", border: "0", textAlign: "center" }}
              >
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "19px",
                    color: "#696f78",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Gonzalez Gina
                </Typography>
                <Typography variant="span" color="text.secondary">
                  Web Developer
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: "none",
                borderRadius: "0",
                backgroundColor: "#e6e6e6",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="260"
                image="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg"
              />
              <CardContent
                style={{ padding: "5px", border: "0", textAlign: "center" }}
              >
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "19px",
                    color: "#696f78",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Holly Vincenzini
                </Typography>
                <Typography variant="span" color="text.secondary">
                  Media Partner
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: "none",
                borderRadius: "0",
                backgroundColor: "#e6e6e6",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="260"
                image="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg"
              />
              <CardContent
                style={{ padding: "5px", border: "0", textAlign: "center" }}
              >
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "19px",
                    color: "#696f78",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Ramirez Minita
                </Typography>
                <Typography variant="span" color="text.secondary">
                Graphic Design
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Team;
