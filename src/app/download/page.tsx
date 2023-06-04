import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import ArticleDownload1 from "@/components/download/Article1";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <main>
        <ArticleDownload1 />
      </main>
      <Footer />
    </>
  );
}

export default page;
