import Image from "next/image";
import Instagram from "/public/assets/Icons/instagram.svg";
import Facebook from "/public/assets/Icons/facebook.svg";
import Google from "/public/assets/Icons/google.svg";
import X from "/public/assets/Icons/x.svg";
import styles from "../styles.module.css";

export default function Contact() {
  return (
    <>
      <div className="contact w-full flex items-center relative mb-16 lg:mb-32">
        <div className="contact-wrapper w-3/4 bg-primary py-4 lg:py-12 ps-8 rounded-tr-[8rem] md:rounded-tr-[13.2rem] lg:rounded-tr-[25rem]">
          <div className="contact-body w-2/3">
            <h1 className="text-[#292F36] lg:text-5xl text-xs md:text-2xl font-normal font-dmserif md:mb-1 lg:mb-8">
              CV. Embassy Sport Indonesia
            </h1>

            <div className="w-2/3 lg:w-1/2 border-b border-solid border-black pb-2">
              <p className="text-black font-dmserif md:text-base text-[0.5rem] lg:text-3xl font-normal lg:text-center text-start">
                Sosial Media Kami
              </p>
            </div>

            <div className="contact-list flex flex-col gap-[2px] lg:gap-4 mt-2 md:mt-4">
              <div className={styles.wrapper}>
                <Facebook className={styles.icon} />
                <h1 className="font-jost md:text-xs text-[0.4rem] lg:text-2xl text-[#4D5053]">
                  Profile/Facebook.com
                </h1>
              </div>
              <div className={styles.wrapper}>
                <Instagram className={styles.icon}/>
                <h1 className="font-jost md:text-xs text-[0.4rem] lg:text-2xl text-[#4D5053]">
                  Profile/Instagram.com
                </h1>
              </div>
              <div className={styles.wrapper}>
                <X className={styles.icon} />
                <h1 className="font-jost md:text-xs text-[0.4rem] lg:text-2xl text-[#4D5053]">
                  Profile/x.com
                </h1>
              </div>
              <div className={styles.wrapper}>
                <Google className={styles.icon} />
                <h1 className="font-jost md:text-xs text-[0.4rem] lg:text-2xl text-[#4D5053]">
                  embassygrass@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/assets/Images/SocialMedia_Background.jpg"
          width={950}
          height={200}
          className="w-[50%] max-h-[8rem] md:max-h-[12.5rem] lg:max-h-[400px] absolute right-0 rounded-bl-[7.5rem] md:rounded-bl-[15rem] lg:rounded-bl-[20rem] lg:top-20"
        />
      </div>
    </>
  );
}
