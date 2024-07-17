import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Footer from "./pages/Footer";
import dynamic from "next/dynamic";

export default function Page() {
  const Product = dynamic(
    () => {
      return import("./pages/Product");
    },
    { ssr: false }
  );

  return (
    <>
      <div className="mx-auto overflow-x-hidden">
        <Home />
        <About />
        <Product />
        <Contact />
        <Location />
        <Footer />
      </div>
    </>
  );
}
