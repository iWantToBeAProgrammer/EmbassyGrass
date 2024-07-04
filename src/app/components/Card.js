import Image from "next/image";
import styles from "../styles.module.css";

const Card = ({ img, desc }) => {
  return (
    <>
      <div className={styles.card}>
        <div className="card-body w-[296px]">
          <figure className="">
            <Image
              src={img}
              width={237}
              height={200}
              className="object-center object-cover"
            />
          </figure>

          <p className="font-['dmserif'] text-[17px] text-[#4D5053]">{desc}</p>
          <div className="card-actions justify-between items-center mt-4">
            <p className="font-['jost'] text-[16px] text-[#4D5053]">
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
    </>
  );
};

export default Card;
