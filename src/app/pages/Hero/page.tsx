import MyDetails from "@/app/components/MyDetails/MyDetails";
import Technologies from "@/app/components/Technologies/Technologies";
import React from "react";
import { Container } from "react-bootstrap";
import bannerImage from "../../../../public/assets/img/banner-bg.png";
import Experience from "@/app/components/Experience/Experience";
import Projects from "@/app/components/Projects/Projects";

const Hero = () => {
  return (
    <Container>
      <div
        className="bg-fixed bg-center py-8 px-4"
        // className="bg-cover bg-center py-8 px-4"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundPosition: "center top 50px",
        }}
      >
        <MyDetails />
        <Technologies />
        <Experience />
        <Projects />
      </div>
    </Container>
  );
};

export default Hero;
