import NavBar from "@/components/NavBar/NavBar";
import Article1 from "@/components/home/Article1";
import Article2 from "@/components/home/Article2";
import Article3 from "@/components/home/Article3";
import Article4 from "@/components/home/Article4";
import Footer from "@/components/home/Footer";
import SobreCambios from "@/components/home/SobreCambios";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <SobreCambios />
      <Footer />
    </main>
  );
}
