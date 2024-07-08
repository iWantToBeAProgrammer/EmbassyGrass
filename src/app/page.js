import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Footer from "./pages/Footer";

export default function Page() {
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
