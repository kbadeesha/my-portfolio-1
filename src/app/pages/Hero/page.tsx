"use client";
import MyDetails from "@/app/components/MyDetails/MyDetails";
import Technologies from "@/app/components/Technologies/Technologies";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image"; // Import next/image
import Experience from "@/app/components/Experience/Experience";
import SplashCursor from "@/app/components/SplashCursor/SplashCursor";
// import { ImageData } from "@/app/data/ImagesData";

const Hero = () => {
  return (
    <Container>
      <SplashCursor />
      <div className="relative py-8 hero-container">
        <div className="bg-image">
          <Image
            src={"/assets/img/banner-bg.png"}
            alt="Banner"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className="absolute inset-0"
          />
        </div>
        <MyDetails />
        <Technologies />
        <Experience />
        {/* <Projects /> */}
      </div>
    </Container>
  );
};

export default Hero;
