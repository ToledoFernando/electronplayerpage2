import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Questions from "@/components/contact/Questions";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <main>
        <Questions />
      </main>
      <Footer />
    </>
  );
}

export default page;
