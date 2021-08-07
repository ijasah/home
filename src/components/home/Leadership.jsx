import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";

const Leadership = ({ gradient, heading, message, img, imageSize }) => {
  return (
    <div
      id="leadership"
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      style={{ background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
      }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center text-white">{heading}</h2>
        <div className="row">
          <div className="col-md-5">
            <p className="lead text-white" style={{ "text-align": "justify" }}>{message}</p>
          </div>
          <div className="col-md-7">
            <Carousel>
              {img.map((value, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={value.img}
                      alt="First slide"
                      width={imageSize.width}
                      height={imageSize.height}
                    />
                    <Carousel.Caption>
                      <h3>{value.label}</h3>
                      <p>
                        {value.paragraph}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
