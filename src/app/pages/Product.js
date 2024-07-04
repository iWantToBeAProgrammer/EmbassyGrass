import Card from "../components/Card";
import ClientCard from "../components/ClientCard";

export default function Product() {
  return (
    <>
      <div className="product mt-32 mb-48">
        <div className="product-wrapper w-full flex flex-col items-center">
          <div className="product-title w-[42%] text-center">
            <h1 className="text-[96px] font-['dmserif'] font-normal text-[#292F36]">
              Produk Kita
            </h1>
            <p className="font-karla text-[#4D5053] text-2xl">
              Importir rumput sintetis, rumput futsal, karpet badminton, pp
              interlock, & lantai vinyl di Indonesia yang siap menjual dengan
              harga termurah
            </p>
          </div>
          <div className="card-wrapper flex justify-around gap-8 mt-24">
            <Card
              img="/assets/Images/RumputSintetis.png"
              desc="Importir Rumput Sintetis Di Indonesia Yang Siap Menjual Dengan  Harga Termurah"
            />
            <Card
              img="/assets/Images/RumputFutsal.png"
              desc="Importir Rumput Futsal Di Indonesia Yang Siap Menjual Dengan  Harga Termurah"
            />
            <Card
              img="/assets/Images/KarpetBadminton.png"
              desc="Importir Karpet Badminton Di Indonesia Yang Siap Menjual Dengan  Harga Termurah"
            />
            <Card
              img="/assets/Images/PPInterlock.png"
              desc="Importir PP Interlock Di Indonesia Yang Siap Menjual Dengan Harga Termurah"
            />
            <Card
              img="/assets/Images/LantaiVinyl.png"
              desc="Importir Lantai Vinyl Di Indonesia Yang Siap Menjual Dengan Harga Termurah"
            />
          </div>
        </div>
      </div>

      <div className="client w-full flex justify-center mb-32">
        <div className="client-wrapper bg-primary w-3/4 py-20 px-8 flex flex-col items-center justify-center gap-12 rounded-[4rem]">
          <h1 className="font-karla-italic font-medium text-[64px] text-[#272343]">
            What Client Says About Us
          </h1>

          <div className="clients flex gap-8">
            <ClientCard
              name={"Retno L"}
              work={"Pebisnis Olahraga"}
              img={"/assets/Images/testimonial.png"}
              comment={
                "Terima kasih, pemasangan rumput sintetisnya sangat rapih & berkualitas, harga produknya juga sangat kompetitif."
              }
            />
            <ClientCard
              name={"Agus E"}
              work={"Pebisnis Olahraga"}
              img={"/assets/Images/testimonial1.png"}
              comment={
                "Thanks, sudah membantu pemasangan interlock lapangan futsal saya, pemasangan rapih, pekerjanya juga bekerja dengan sangat baik."
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
