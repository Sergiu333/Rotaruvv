import Image from "next/image";

const Hero = () => {
  return(
      <div className="4xl:px-[90px] 4xl:pt-[40px] relative">
          <hr className="border border-white/[.5] w-[914px] absolute left-0 top-[207px]"/>
          <div className="flex flex-row justify-between w-full">
              <Image src="/img-left-hero.jpg" alt="left image" width={498} height={711} />
              <div className="pt-[100px]">
                  <Image src="/img-right-hero.jpg" alt="left image" width={498} height={711} />
              </div>
          </div>
      </div>
  )
}

export default Hero
