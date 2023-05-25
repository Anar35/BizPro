import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./index.module.css";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="text-center">
          <h1 className="titleh1">OUR LATEST Blog</h1>
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
              className={style.card}
              sx={{
                maxWidth: 345,
                boxShadow: "none",
                borderRadius: "0",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <CardMedia
                  className={style.cardImg}
                  component="img"
                  alt="..."
                  height="260"
                  image="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg"
                />
              </div>
              <CardContent style={{ padding: "5px", border: "0" }}>
                <Typography
                  className={style.cardTitle}
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    marginTop: "30px",
                  }}
                  gutterBottom
                  variant="h5"
                  href="#"
                  component="a"
                >
                  Playback: Akufo-Addo speaks to business community
                </Typography>
                <Typography
                  className={style.cardTitle}
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    margin: "18px 0",
                    color: "#292929",
                  }}
                  gutterBottom
                  variant="span"
                  href="#"
                  component="a"
                >
                  Posted by <span style={{ color: "#d73e4d" }}>admin</span> at
                  04 Feb, 2017
                </Typography>
                <Typography variant="span" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sagittis iaculis velit in tristique. Curabitur ac urna urna
                  sed accumsan...{" "}
                  <a className={style.cardLink} href="#">
                    Read More
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              className={style.card}
              sx={{
                maxWidth: 345,
                boxShadow: "none",
                borderRadius: "0",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <CardMedia
                  className={style.cardImg}
                  component="img"
                  alt="..."
                  height="260"
                  image="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg"
                />
              </div>
              <CardContent style={{ padding: "5px", border: "0" }}>
                <Typography
                  className={style.cardTitle}
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    marginTop: "30px",
                  }}
                  gutterBottom
                  variant="h5"
                  href="#"
                  component="a"
                >
                  Playback: Akufo-Addo speaks to business community
                </Typography>
                <Typography
                  className={style.cardTitle}
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    margin: "18px 0",
                    color: "#292929",
                  }}
                  gutterBottom
                  variant="span"
                  href="#"
                  component="a"
                >
                  Posted by <span style={{ color: "#d73e4d" }}>admin</span> at
                  04 Feb, 2017
                </Typography>
                <Typography variant="span" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sagittis iaculis velit in tristique. Curabitur ac urna urna
                  sed accumsan...{" "}
                  <a className={style.cardLink} href="#">
                    Read More
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              className={style.card}
              sx={{
                maxWidth: 345,
                boxShadow: "none",
                borderRadius: "0",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <CardMedia
                  className={style.cardImg}
                  component="img"
                  alt="..."
                  height="260"
                  image="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg"
                />
              </div>
              <CardContent style={{ padding: "5px", border: "0" }}>
                <Typography
                  className={style.cardTitle}
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    marginTop: "30px",
                  }}
                  gutterBottom
                  variant="h5"
                  href="#"
                  component="a"
                >
                  Playback: Akufo-Addo speaks to business community
                </Typography>
                <Typography
                  className={style.cardTitle}
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    margin: "18px 0",
                    color: "#292929",
                  }}
                  gutterBottom
                  variant="span"
                  href="#"
                  component="a"
                >
                  Posted by <span style={{ color: "#d73e4d" }}>admin</span> at
                  04 Feb, 2017
                </Typography>
                <Typography variant="span" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sagittis iaculis velit in tristique. Curabitur ac urna urna
                  sed accumsan...{" "}
                  <a className={style.cardLink} href="#">
                    Read More
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Blog;
