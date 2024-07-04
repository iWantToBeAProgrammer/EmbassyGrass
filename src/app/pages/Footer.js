import Image from "next/image";
import FooterX from "../../../public/assets/Icons/footer-x.svg";
import FooterFacebook from "../../../public/assets/Icons/footer-facebook.svg";
import FooterInstagram from "../../../public/assets/Icons/footer-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <footer className="footer bg-base-100 text-base-content p-10 w-3/4 font-jost">
          <aside className="leading-loose">
            <Image src={"/assets/Images/Logo2.png"} width={300} height={50} />
            <p className="font-karla-italic font-light">
              One Stop Solution For Your Sport Floor Needs
            </p>

            <div className="footer-icons w-1/2 flex justify-between mt-4">
              <FooterFacebook width={7} />
              <FooterX width={15} />
              <FooterInstagram width={15} />
            </div>
          </aside>
          <nav className="flex flex-col gap-10 text-[22px]">
            <h6 className="footer-title text-neutral opacity-100 font-dmserif capitalize font-normal tracking-wider text-[25px]">
              Halaman
            </h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Product</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav className="flex flex-col gap-10 text-[22px]">
            <h6 className="footer-title text-neutral opacity-100 font-dmserif capitalize font-normal tracking-wider text-[25px]">
              Produk Kami
            </h6>
            <a className="link link-hover">Rumput Sintesis</a>
            <a className="link link-hover">Rumput Futsal</a>
            <a className="link link-hover">Karpet Badminton</a>
            <a className="link link-hover">PP Interlock</a>
            <a className="link link-hover">Lantai Vinyl</a>
          </nav>
          <nav className="flex flex-col gap-10 text-[22px]">
            <h6 className="footer-title text-neutral opacity-100 font-dmserif capitalize font-normal tracking-wider text-[25px]">
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
        </footer>
      </div>
      <div className="text-center">
        <p className="text-neutral text-xl mt-24 p-4 border-t-2 border-solid ">
          Copyright &#169; Embassygrass | Designed By Putra & Juan
        </p>
      </div>
    </>
  );
};

export default Footer;
