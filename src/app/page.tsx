// src/app/page.tsx
"use client";

import Footer from "./pages/Footer/page";
import Header from "./pages/Header/page";
import Hero from "./pages/Hero/page";

export default function Home() {
  return (
    <div>
      <Header /> 
      <Hero /> 
      <Footer />
    </div>
  );
}
