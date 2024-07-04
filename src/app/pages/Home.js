import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen lg:h-screen bg-top-background bg-cover bg-center">
        <div className="home-content w-[100%] lg:ps-[150px] h-lvh md:px-10 px-8 lg:px-12 md:items-end lg:items-center flex items-center">
          <div className="content-wrapper flex justify-center md:justify-end lg:justify-between h-4/5 flex-col lg:gap-0 gap-12">
            <div className="content-left lg:h-full flex flex-col lg:justify-center gap-6 lg:gap-12 text-center lg:text-left md:px-0 px-6">
              <div className="header-wrapper lg:w-[60%]">
                <div className="text-header font-['karla-italic'] font-bold lg:text-[6.875rem] md:text-8xl text-[1.875rem] leading-none ">
                  One Stop Solution For Your Sport Floor Needs
                </div>
              </div>
              <div className="desc-wrapper lg:w-[65%] ">
                <p className="text-desc font-['karla-italic'] font-medium text-[1.125rem] md:text-[2rem]  md:leading-none ">
                  CV. Embassy Sport Indonesia adalah importir untuk rumput
                  sintetis, karpet badminton & rumput sport floor, juga produsen
                  PP interlock yang memiliki kualitas terbaik dengan harga
                  terjangkau.
                </p>
              </div>
              <button className="btn w-full lg:w-[17.938rem] lg:py-[20px] lg:px-[40px] h-[31px] rounded-xl md:rounded-badge md:h-[50px] lg:h-[63px] text-[1.125rem] shadow-xl cursor-pointer">
                Hubungi Sekarang &rarr;
              </button>
            </div>
            <div className="content-right lg:h-full flex justify-center items-center gap-4 md:gap-12 lg:gap-0 lg:justify-around lg:items-end lg:flex-col mb-10 lg:mb-0 lg:me-10 lg:absolute top-0 right-0 w-full">
              <div className="content-card md:block flex justify-center items-center w-[7.6rem] md:w-[19.438rem] lg:w-[16.625rem] card h-[116px] md:h-[246px] lg:h-[266px] md:ps-[30px] md:pt-[30px] border border-solid border-black border-opacity-40 shadow-xl rounded-[1rem] p-4 md:rounded-[4rem] backdrop-filter backdrop-blur-lg">
                <div className="card-text leading-tight md:w-[4.375rem] flex flex-col gap-4">
                  <h1 className=" font-karla md:text-[4.375rem] text-4xl">
                    500
                  </h1>
                  <h2 className="font-karla md:text-[1.875rem] text-xl">
                    Portofolio Lapangan
                  </h2>
                </div>
              </div>
              <div className="address-card w-[11.25rem] md:w-[25.75rem] h-[115px] md:h-[232px] ps-2 pt-2 md:ps-[1.875rem] md:pt-[1.875rem] border border-solid border-black border-opacity-40 shadow-xl rounded-[1rem] backdrop-filter backdrop-blur-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 md:size-12 text-black/60"
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
                <div className="address mt-2 md:mt-4">
                  <h1 className="address-title font-karla md:text-xl text-xs font-extrabold">
                    CV. EMBASSY SPORT INDONESIA
                  </h1>
                  <p className="address-desc font-karla md:text-base text-[0.5rem] font-medium">
                    Jl. Kh. Hasyim Ashari No. 98, Pinang, Ciledug RT.003/RW.002,
                    Pinang, Kec. Pinang, Kota Tangerang, Banten 15145
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner w-full h-[41px] md:h-[150px] lg:h-[230px] bg-primary rounded-bl-[20rem] text-['font-color'] flex items-center md:pe-0 pe-3 justify-end md:justify-between md:ps-[120px] lg:px-[184px] mb-32">
        <div className="banner-wrapper font-karla  text-[#4D5053] font-bold lg:w-[65%] leading-tight">
          <h1 className="text-[20px] md:text-[32px] lg:text-[64px]">
            CV. Embassy Sport Indonesia
          </h1>
          <p className="text-[15px] lg:text-[22px] w-[70%] lg:w-3/4 md:block hidden">
            Pengalaman kami tidak diragukan lagi karena telah menyelesaikan
            project lapangan lebih dari 500 lapangan. Jaminan harga termurah
            dari importir rumput sintetis.
          </p>
        </div>
        <button className="btn btn-secondary md:block hidden text-base-100 btn-sm lg:btn-lg font-karla text-[14px] lg:h-12 h-[36px] lg:text-[32px] font-normal rounded-2xl me-[20px]">
          Tentang Kami &rarr;
        </button>
      </div>
    </>
  );
}
