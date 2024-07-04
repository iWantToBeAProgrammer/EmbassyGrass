import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="about-pages">
        <div className="about-wrapper w-full flex items-center flex-col">
          <div className="first-hero flex gap-12 w-[70%]">
            <Image
              src="/assets/Images/HeroImages1.jpg"
              width={546}
              height={527}
              className="object-center object-cover rounded-[4rem] aspect-square"
            />
            <div className="first-text-wrapper mt-8 text-justify">
              <h1 className="first-hero-title text-secondary text-[48px] font-normal font-['dmserif']">
                Inovasi Lapangan Terbaik
              </h1>
              <p className="text-black text-[32px] font-normal leading-[150%] tracking-[1%] font-karla w-full">
                Rumput kami memiliki sertifikat resmi dari FIFA baik sertifikat
                FIFA 1 star maupun sertifikat FIFA 2 star. Proyek-proyek
                EmbassyGrass Indonesia sudah terpasang di lebih dari 500
                lapangan futsal di seluruh Indonesia yang tersebar dari Aceh -
                Papua.
              </p>
            </div>
          </div>
          <div className="second-hero flex gap-12 w-[70%] mt-24">
            <div className="second-text-wrapper text-justify leading-tight">
              <h1 className="first-hero-title text-secondary text-[48px] font-normal font-['dmserif']">
                No. 1
              </h1>
              <h2 className="text-secondary text-[45px] font-normal font-['dmserif']">
                Jaminan Harga Termurah
              </h2>
              <p className="text-black text-[32px] font-normal leading-[150%] tracking-[1%] font-karla mt-8">
                Jaminan harga termurah dari importir rumput sintetis. CV.
                Embasssy Sport Indonesia adalah salah satu perusahaan importir
                rumput sintetis terbesar di Indonesia yang melayani penjualan &
                pemasangan rumput sintetis olahraga berpengalaman & profesional.
              </p>
              <button className="btn bg-secondary text-white text-[32px] rounded-2xl px-4 font-normal mt-8">
                Produk Kami &rarr;
              </button>
            </div>
            <Image
              src="/assets/Images/HeroImages2.jpg"
              width={565}
              height={749}
              className="object-center object-cover rounded-tr-[50%] rounded-bl-[5rem]"
            />
          </div>
        </div>
        <div className="about-banner w-full bg-primary h-[374px] mt-32">
          <div className="icon-wrapper flex justify-center items-center h-full">
            <div className="portofolio-icon w-[340px] flex justify-center items-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-[100px] text-[#4D5053]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                />
              </svg>
              <p className=" font-['jost'] text-[22px] font-normal text-[#4D5053]">
                500+ Portofolio Lapangan
              </p>
            </div>
            <div className="w-[340px] border-x-2 border-solid border-black/50 flex justify-center flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-[100px] text-[#1C1C1C]"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className=" font-['jost'] text-[22px] font-normal text-[#4D5053]">
                Jaminan Harga Termurah
              </p>
            </div>
            <div className="truck-icon w-[340px] flex justify-center flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-[100px] text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <p className=" font-['jost'] text-[22px] font-normal text-[#4D5053]">
                Siap Survey dan Pemasangan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}