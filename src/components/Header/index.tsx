import Image from "next/image";

const Header = () => {
  return(
      <div className="4xl:px-[344px] pt-[60px]">
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[100px] text-lg text-[#FFFFFFB2]">
                <div>Portfolio</div>
                <div>Info</div>
            </div>
            <Image src="/Rotaruvv-logo.svg" alt="" width={200} height={80} />
            <div className="flex flex-row gap-[100px] text-lg text-[#FFFFFFB2]">
                <div>About me</div>
                <div>Contact</div>
            </div>
        </div>
      </div>
  )
}

export default Header;
