import Image from "next/image";

const ClientCard = ({ img, name, work, comment }) => {
  return (
    <>
      <div className="client-card lg:w-96 md:w-40 md:h-40 lg:h-96 bg-white md:rounded-xl lg:rounded-3xl md:pt-2 lg:pt-10 lg:pb-8 lg:px-8 flex flex-col md:gap-3 lg:gap-8 md:px-2">
        
        <div className="client-profile flex items-center md:gap-2 lg:gap-12">
          <Image
            src={img}
            width={77}
            height={77}
            className="aspect-square rounded-full object-cover object-center lg:w-20 md:w-5"
          />

          <div className="client-desc leading-relaxed">
            <h1 className="font['dmserif'] lg:text-2xl md:text-xs text-[#292F36] font-normal">{name}</h1>
            <p className="font-karla text-[#292F36] lg:text-base md:text-[0.525rem] font-normal">{work}</p>
          </div>
        </div>

        <p className="comment text-['jost'] lg:text-2xl md:text-[0.625rem] font-normal text-[#4D5053]">{comment}</p>
      </div>
    </>
  );
};

export default ClientCard;
