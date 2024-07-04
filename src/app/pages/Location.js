import Image from "next/image";
import RightArrow from "../../../public/assets/Icons/rightArrow.svg";

export default function Location() {
  return (
    <>
      <div className="location w-full flex justify-center mb-32">
        <div className="location-wrapper w-4/5 flex items-center flex-col">
          <div className="location-title font-dmserif text-[96px] text-center leading-tight mb-12">
            <h1 className="text-[#292F36]">
              CV Embassy <span className="text-red-600">Sport</span> Indonesia
            </h1>
            <p className="font-karla text-[#4D5053] text-[36px]">
              Importir rumput sintetis & produsen pp interlock
            </p>
          </div>

          <div className="google-maps flex gap-8 items-center">
            <Image
              src="/assets/Images/Maps.png"
              width={874}
              height={500}
              className="rounded-[3rem]"
            />
            <div className="flex flex-col gap-3">
              <div className="maps-wrapper flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-16 text-black/80"
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
                  <h1 className="text-[#EA3535] text-[36px] font-karla-italic font-extrabold leading-tight">
                    Lokasi Kami
                  </h1>

                  <RightArrow />
                </div>
              </div>
              <div className="desc text-[32px] text-black font-karla">
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

      <div className="location-banner w-full h-[432px] bg-primary flex items-center justify-center rounded-br-[25rem] relative">
        <div className="location-banner-wrapper w-4/5 flex justify-between ps-20">
          <div className="location-banner-text w-2/3 flex flex-col">
            <h1 className="text-[#030605] text-[82px] font-dmserif tracking-tight leading-tight">
              Segera Pesan <div>Produk Kami Sekarang!</div>
            </h1>
            <RightArrow width={150} className="font-extrabold mt-16" />
          </div>
        </div>
        <div className="footer-image w-1/3 flex items-start h-full">
          <div className="footer-image-wrapper shadow-inner">
            <Image
              src="/assets/Images/Footer_Background.jpg"
              width={300}
              height={400}
              className="rounded-br-[15rem] object-cover object-center  shadow-black/70"
            />
          </div>
        </div>
      </div>
    </>
  );
}
