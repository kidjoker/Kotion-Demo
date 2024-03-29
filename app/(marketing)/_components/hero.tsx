import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5 ">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/Documents.png"
            alt="Documents"
            className="object-contain dark:hidden"
            fill
          />
          <Image
            src="/Documents Dark.png"
            alt="Documents"
            className="object-contain hidden dark:block"
            fill
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/Reading.png"
            alt="Reading"
            className="object-contain dark:hidden"
            fill
          />
          <Image
            src="/Reading Dark.png"
            alt="Reading"
            className="object-contain hidden dark:block"
            fill
          />
        </div>
      </div>
    </div>
  );
};
