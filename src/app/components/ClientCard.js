import Image from "next/image";

const ClientCard = ({ img, name, work, comment }) => {
  return (
    <>
      <div className="client-card w-[370px] h-[339px] bg-white rounded-3xl pt-10 pb-8 px-8 flex flex-col gap-8">
        <div className="client-profile flex items-center gap-12">
          <Image
            src={img}
            width={77}
            height={77}
            className="aspect-square rounded-full object-cover object-center"
          />

          <div className="client-desc leading-relaxed">
            <h1 className="font['dmserif'] text-[22px] text-[#292F36] font-normal">{name}</h1>
            <p className="font-karla text-[#292F36] text-[16px] font-normal">{work}</p>
          </div>
        </div>

        <p className="comment text-['jost'] text-[20px] font-normal text-[#4D5053]">{comment}</p>
      </div>
    </>
  );
};

export default ClientCard;
