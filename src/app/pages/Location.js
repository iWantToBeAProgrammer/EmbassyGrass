import Image from "next/image";
import RightArrow from "../../../public/assets/Icons/rightArrow.svg";

export default function Location() {
  return (
    <>
      <div className="location w-full flex justify-center mb-16 lg:mb-32">
        <div className="location-wrapper w-4/5 flex items-center flex-col">
          <div className="location-title font-dmserif lg:text-8xl md:text-2xl text-base text-center leading-tight mb-6 md:mb-6 lg:mb-12">
            <h1 className="text-[#292F36]">
              CV Embassy <span className="text-red-600">Sport</span> Indonesia
            </h1>
            <p className="font-karla text-[#4D5053] lg:text-4xl md:text-base text-[0.5rem]">
              Importir rumput sintetis & produsen pp interlock
            </p>
          </div>

          <div className="google-maps flex gap-4 md:gap-8 md:items-start lg:items-center items-center md:flex-row">
            <Image
              src="/assets/Images/Maps.png"
              width={874}
              height={500}
              className="md:rounded-[2rem] lg:rounded-[3rem] rounded-2xl w-1/2"
            />
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="maps-wrapper flex items-center gap-1 md:gap-3 justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="md:size-8 size-5 lg:size-16 text-black/80"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <div className="maps-text flex flex-col gap-1">
                  <h1 className="text-[#EA3535] text-[0.625rem] md:text-xl lg:text-4xl font-karla-italic font-extrabold leading-tight">
                    Lokasi Kami
                  </h1>

                  <RightArrow className="hidden md:block"/>
                </div>
              </div>
              <div className="desc md:text-base lg:text-3xl text-black font-karla text-[0.5rem] ">
                <h2>Gudang Kami</h2>
                <p>CV. Embassy Sport Indonesia</p>
                <p>Jl. Kh. Hasyim Ashari No.98, Pinang,</p>
                <p>Ciledug RT.003/RW.002, Pinang, Kec.</p>
                <p>Pinang, Kota Tangerang, Banten 15145</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="location-banner w-full md:h-40 lg:h-96 bg-primary flex items-center justify-center rounded-br-[25rem] relative">
        <div className="location-banner-wrapper w-4/5 flex justify-between md:ps-16 lg:ps-20 ps-6">
          <div className="location-banner-text w-2/3 flex flex-col">
            <h1 className="text-[#030605] text-md md:text-3xl lg:text-7xl font-dmserif tracking-tight leading-tight">
              Segera Pesan <div>Produk Kami Sekarang!</div>
            </h1>
            <RightArrow width={150} className="font-extrabold mt-4 md:mt-6 lg:mt-16 md:w-36 w-24" />
          </div>
        </div>
        <div className="footer-image w-1/3 flex items-start h-full md:pb-0 pb-4">
          <div className="footer-image-wrapper shadow-inner">
            <Image
              src="/assets/Images/Footer_Background.jpg"
              width={300}
              height={400}
              className="md:rounded-br-[8rem] lg:rounded-br-[15rem] object-cover object-center  shadow-black/70 w-12 h-16 rounded-br-[3rem] md:h-36  md:w-32 lg:w-72 lg:h-80"
            />
          </div>
        </div>
      </div>
    </>
  );
}
