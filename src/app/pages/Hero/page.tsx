import MyDetails from "@/app/components/MyDetails/MyDetails";
import Technologies from "@/app/components/Technologies/Technologies";
import React from "react";
import { Container } from "react-bootstrap";
import bannerImage from "../../../../public/assets/img/banner-bg.png";

const Hero = () => {
  return (
    <Container>
      <div
        className="bg-cover bg-center py-8 px-4"
        style={{ backgroundImage: `url(${bannerImage.src})` }}
      >
        <MyDetails />
        <Technologies />``
      </div>
    </Container>
  );
};

export default Hero;
