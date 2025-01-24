// src/app/page.tsx
"use client";


import { Footer } from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./pages/Hero/page";

export default function Home() {
  return (
    <div>
      <NavBar /> 
      <Hero /> 
      <Footer />
    </div>
  );
}
