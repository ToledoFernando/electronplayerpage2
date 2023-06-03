import NavBar from "@/components/NavBar/NavBar";
import Article1 from "@/components/home/Article1";
import Article2 from "@/components/home/Article2";
import Article3 from "@/components/home/Article3";
import Article4 from "@/components/home/Article4";
import Footer from "@/components/Footer";
import SobreCambios from "@/components/home/SobreCambios";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Article1 />
      <section className="border-y-2 border-gray-700 border-dashed pt-16 mt-16">
        <Article2 />
        <Article3 />
        <Article4 />
      </section>
      <SobreCambios />
      <Footer />
    </main>
  );
}
