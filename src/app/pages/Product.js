"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import ClientCard from "../components/ClientCard";

export default function Product() {
  const [windowSize, setWindowSize] = useState(
    typeof window !== "undefined"
      ? window.innerWidth
      : document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      <div className="product md:mt-32 md:mb-24 mt-12 mb-16 lg:mb-16 flex justify-center items-center w-full">
        <div className="product-wrapper w-3/4 md:w-full lg:w-3/4 flex flex-col items-center gap-4 md:gap-12 md:px-24">
          <div className="product-title md:w-3/4 text-center md:px-0 px-4">
            <h1 className="lg:text-8xl font-['dmserif'] font-normal text-[#292F36] md:text-6xl text-4xl">
              Produk Kita
            </h1>
            <p className="font-karla text-[#4D5053] md:text-base lg:text-2xl mt-4 text-xs">
              Importir rumput sintetis, rumput futsal, karpet badminton, pp
              interlock, & lantai vinyl di Indonesia yang siap menjual dengan
              harga termurah
            </p>
          </div>
          <div className="card-wrapper items-center w-full justify-start md:py-0 py-8 flex md:w-full gap-8 md:flex-col md:overflow-x-visible overflow-x-auto md:overflow-visible  overflow-y-hidden">
            <div className="flex md:justify-between gap-4 md:flex-col">
              <div className="flex md:justify-between gap-4">
                <Card
                  img="/assets/Images/footballGrass.jpg"
                  desc="Importir Rumput Sintetis Di Indonesia Yang Siap Menjual Dengan  Harga Termurah"
                  title={"Rumput Sintetis"}
                />
                <Card
                  img="/assets/Images/RumputFutsal.jpg"
                  desc="Importir Rumput Futsal Di Indonesia Yang Siap Menjual Dengan  Harga Termurah"
                  title={"Rumput Futsal"}
                />
                <Card
                  img="/assets/Images/PPInterlock.jpg"
                  desc="Importir Karpet Badminton Di Indonesia Yang Siap Menjual Dengan  Harga Termurah"
                  title={"PP Interlock"}
                />
              </div>
              <div className="flex md:justify-between gap-4">
                <Card
                  img="/assets/Images/KarpetBadminton.jpg"
                  desc="Importir PP Interlock Di Indonesia Yang Siap Menjual Dengan Harga Termurah"
                  type={windowSize < 768 ? "base" : "wide"}
                  title={"Karpet Badminton"}
                />
                <Card
                  img="/assets/Images/LantaiVinyl.jpg"
                  desc="Importir Lantai Vinyl Di Indonesia Yang Siap Menjual Dengan Harga Termurah"
                  type={windowSize < 768 ? "base" : "wide"}
                  title={"Lantai Vinyl"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="client w-full flex justify-center mb-16 md:mb-24 lg:mb-32">
        <div className="client-wrapper bg-primary w-11/12 md:w-3/4 lg:w-2/3 py-8 md:py-20 px-12 flex flex-col items-center justify-center gap-6 md:gap-12 rounded-[3rem] md:rounded-[4rem]">
          <h1 className="font-karla-italic font-medium lg:text-6xl text-xl md:text-4xl text-[#272343]">
            What Client Says About Us
          </h1>

          <div className="clients flex gap-2 md:gap-6 lg:gap-14">
            <ClientCard
              name={"Agus E"}
              work={"Pebisnis Olahraga"}
              img={"/assets/Images/testimonial1.png"}
              comment={
                "Thanks, sudah membantu pemasangan interlock lapangan futsal saya, pemasangan rapih, pekerjanya juga bekerja dengan sangat baik."
              }
            />
            <ClientCard
              name={"Retno L"}
              work={"Pebisnis Olahraga"}
              img={"/assets/Images/testimonial.png"}
              comment={
                "Terima kasih, pemasangan rumput sintetisnya sangat rapih & berkualitas, harga produknya juga sangat kompetitif."
              }
            />
            <ClientCard
              name={"Doni P"}
              work={"Pengusaha Olahraga"}
              img={"/assets/Images/testimonial2.png"}
              comment={
                "Pemasangan rumput sintetisnya sangat baik, harga yang ditawarkan juga paling murah. Saya sangat puas dengan hasil pekerjaannya."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
