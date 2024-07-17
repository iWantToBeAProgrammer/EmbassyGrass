import Image from "next/image";

const ClientCard = ({ img, name, work, comment }) => {
  return (
    <>
      <div className="client-card lg:min-w-72 md:w-40 w-24 h-28 px-2 md:h-40 lg:min-h-72 pt-2 bg-white rounded-lg md:rounded-xl lg:rounded-3xl md:pt-2 lg:pt-10 lg:pb-8 lg:px-8 flex flex-col md:gap-3 gap-1 lg:gap-8 md:px-2">
        <div className="client-profile flex items-center md:gap-2 lg:gap-4 gap-2">
          <Image
            src={img}
            width={77}
            height={77}
            className="aspect-square rounded-full object-cover object-center lg:w-20 md:w-5 w-5"
          />

          <div className="client-desc leading-relaxed">
            <h1 className="font['dmserif'] text-[0.5rem] lg:text-xl md:text-xs text-[#292F36] font-normal">
              {name}
            </h1>
            <p className="font-karla text-[#292F36] text-[0.3rem] lg:text-xs md:text-[0.525rem] font-normal">
              {work}
            </p>
          </div>
        </div>

        <p className="comment text-['jost'] lg:text-sm md:text-[0.625rem] text-[0.4rem] font-normal text-[#4D5053]">
          {comment}
        </p>
      </div>
    </>
  );
};

export default ClientCard;
