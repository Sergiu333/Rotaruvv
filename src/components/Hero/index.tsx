import Image from "next/image";

const Hero = () => {
  return(
      <div className="4xl:px-[90px] 4xl:pt-[40px] relative">
          <div className="absolute left-0 right-0 top-[207px] w-full">
              <hr className="border border-white/[.5] w-[50%] mt-[34px] absolute left-0"/>
              <div className="hero-text 3xl:pl-[511px]">Photography</div>
              <hr className="border border-white/[.5] w-[60%] mt-[11px] absolute right-0"/>
              <div className="hero-text_bottom absolute right-0 pt-[33px] 3xl:pr-[565px]">as Art</div>
          </div>
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
