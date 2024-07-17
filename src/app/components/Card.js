import Image from "next/image";
import styles from "../styles.module.css";
import Link from "next/link";

const Card = ({ img, desc, type, title }) => {
  return (
    <>
      {type != "wide" ? (
        <div className={styles.card}>
          <div className="card-body lg:w-72 md:w-60 w-[7.5rem] p-2 md:p-4">
            <figure className="relative">
              <Image
                src={img}
                width={237}
                height={300}
                className="object-center object-cover rounded-t-badge h-20 md:h-28 lg:h-36"
              />
              <div className="badge absolute bottom-1 left-1 border border-solid border-black rounded-bl-none font-dmserif font-normal md:text-[0.875rem] text-[0.4rem]">
                {title}
              </div>
            </figure>

            <p className="font-['dmserif'] text-[0.5rem] md:text-base text-[#4D5053]">
              {desc}
            </p>
            <div className="card-actions justify-between items-center lg:mt-4">
              <p className="font-['jost'] md:text-base text-[#4D5053] text-[0.5rem]">
                Hubungi Kami
              </p>
              <button className="btn btn-xs md:btn-md btn-[#F4F0EC] rounded-full bg-[#F4F0EC]">
                <Link href={"https://wa.me/6285173105167"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 md:size-5 font-semibold"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <div className="card-body lg:w-[28.5rem] md:w-[23rem]">
            <figure className="relative">
              <Image
                src={img}
                width={470}
                height={230}
                className="object-center object-cover h-44 rounded-t-badge"
              />
              <div className="badge absolute bottom-1 left-1 border border-solid border-black rounded-bl-none font-dmserif font-normal">
                {title}
              </div>
            </figure>

            <p className="font-['dmserif'] text-base text-[#4D5053]">{desc}</p>
            <div className="card-actions justify-between items-center lg:mt-4">
              <p className="font-['jost'] text-base text-[#4D5053]">
                Hubungi Kami
              </p>
              <button className="btn btn-[#F4F0EC] rounded-full bg-[#F4F0EC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 font-semibold"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
