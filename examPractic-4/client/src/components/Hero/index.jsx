import React from "react";
import style from "./index.module.css";
import Button from "../Button";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  return (
    <section id="hero">
      <div className="left-chevron">
        <ArrowBackIosIcon style={{ fontSize: "20px" }} />{" "}
      </div>
      <h1 className={style.h1}>Hello we're Bizpro</h1>
      <p className={style.p}>Sub Head, Motto or Mission subtitle</p>
      <Button>See our projects</Button>
      <div className="right-chevron">
        <ArrowForwardIosIcon style={{ fontSize: "20px" }} />{" "}
      </div>
    </section>
  );
};

export default Hero;
