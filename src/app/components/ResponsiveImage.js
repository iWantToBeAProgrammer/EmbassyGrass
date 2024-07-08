import Image from "next/image";

const ResponsiveImage = ({ src, alt, width, height }) => {
  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[calc(100vh-4rem)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-lg shadow-lg object-cover aspect-square"
      />
    </div>
  );
};

export default ResponsiveImage;
