import Image from "next/image";
import FooterX from "../../../public/assets/Icons/footer-x.svg";
import FooterFacebook from "../../../public/assets/Icons/footer-facebook.svg";
import FooterInstagram from "../../../public/assets/Icons/footer-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-8 md:mt-4">
        <footer className="footer bg-base-100 text-base-content md:p-6 lg:p-10 md:w-11/12 font-jost w-5/6 md:grid flex flex-col md:items-start items-center">
          <aside className="leading-loose md:w-5/6 lg:w-1/2 w-1/2">
            <Image
              src={"/assets/Images/Logo2.png"}
              width={300}
              height={50}
              className="w-full"
            />
            <p className="font-karla-italic md:font-light lg:text-base md:text-xs text-base md:text-left text-center">
              One Stop Solution For Your Sport Floor Needs
            </p>

            <div className="footer-icons md:w-2/3 lg:w-1/2 flex justify-around md:justify-between mt-4 w-full">
              <FooterFacebook width={7} className="md:w-2 w-3" />
              <FooterX width={15} className="md:w-4 w-6" />
              <FooterInstagram width={15} className="md:w-4 w-6" />
            </div>
          </aside>
          <div className="flex gap-6 md:w-full lg:justify-between lg:gap-0 md:justify-start w-5/6 justify-between">
            <nav className="flex flex-col gap-1 md:gap-4 lg:gap-10 lg:text-xl md:text-sm text-[0.475rem]">
              <h6 className="footer-title text-neutral opacity-100 font-dmserif capitalize font-normal tracking-wider lg:text-2xl">
                Halaman
              </h6>
              <a className="link link-hover">Home</a>
              <a className="link link-hover">About</a>
              <a className="link link-hover">Product</a>
              <a className="link link-hover">Contact</a>
            </nav>
            <nav className="flex flex-col gap-1 md:gap-4 lg:gap-10 lg:text-xl md:text-sm text-[0.475rem]">
              <h6 className="footer-title text-neutral opacity-100 font-dmserif capitalize font-normal tracking-wider lg:text-2xl">
                Produk Kami
              </h6>
              <a className="link link-hover">Rumput Sintesis</a>
              <a className="link link-hover">Rumput Futsal</a>
              <a className="link link-hover">Karpet Badminton</a>
              <a className="link link-hover">PP Interlock</a>
              <a className="link link-hover">Lantai Vinyl</a>
            </nav>
            <nav className="flex flex-col gap-1 md:gap-4 lg:gap-10 lg:text-xl md:text-sm text-[0.475rem]">
              <h6 className="footer-title text-neutral opacity-100 font-dmserif capitalize font-normal tracking-wider lg:text-2xl">
                Lokasi Kami
              </h6>
              <div className="our-location-footer leading-normal">
                <p>Jl. kh. Hasyim Ashari NO. 98. </p>
                <p>Pinang, Ciledug RT.003/ </p>
                <p>RW.002, Pinang, Kec. Pinang,</p>
                <p>Kota Tangerang, Banten 15145</p>
              </div>
              <p>embassygrass@gmail.com</p>
              <div className="phone-number-footer leading-loose">
                <p>082-1111-90-775</p>
                <p>081-6181-3331</p>
              </div>
            </nav>
          </div>
        </footer>
      </div>
      <div className="text-center">
        <p className="text-neutral text-xs md:text-xl mt-16 md:mt-24 p-4 border-t-2 border-solid ">
          Copyright &#169; Embassygrass | Designed By Putra & Juan
        </p>
      </div>
    </>
  );
};

export default Footer;
