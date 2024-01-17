import Image from "next/image";

const Header = () => {
  return(
      <div className="px-5 xs:px-14 sm:px-24 md:px-32 lg:px-44 xl:px-48 2xl:px-56 3xl:px-[344px] pt-[60px]">
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[10px] lg:gap-[50px] 3xl:gap-[100px] text-lg text-[#FFFFFFB2] hidden md:flex">
                <div>Portfolio</div>
                <div>Info</div>
            </div>
            <Image src="/Rotaruvv-logo.svg" alt="" width={200} height={80} />
            <div className="flex flex-row gap-[20px] lg:gap-[50px] 3xl:gap-[100px] text-lg text-[#FFFFFFB2] hidden md:flex">
                <div>About me</div>
                <div>Contact</div>
            </div>
        </div>
      </div>
  )
}

export default Header;
