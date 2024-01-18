import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="px-5 xs:px-14 sm:px-24 lg:px-[30px] xl:px-[50px] 3xl:px-[90px] 3xl:pt-[173px] relative">
            <div className="absolute left-0 right-0 top-[230px] sm:top-[300px] lg:top-[407px] w-full z-30">
                <hr className="border border-white/[.5] w-[50%] mt-[34px] absolute left-0"/>
                <div className="hero-text lg:pl-[20%] 3xl:pl-[511px] text-[40px] xs:text-[50px] sm:text-[70px] lg:text-[127px]">Photography</div>
                <hr className="border border-white/[.5] w-[60%] mt-[11px] absolute right-0"/>
                <div className="hero-text_bottom absolute right-0 pt-[33px] lg:pr-[20%] 3xl:pr-[565px] text-[40px] xs:text-[50px] sm:text-[70px] lg:text-[127px]">as Art</div>
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="absolute left-2.5 top-[102px] lg:top-0 w-[208px] h-[297px] z-10 lg:relative lg:mt-[200px] sm:w-[360px] sm:h-[518px] lg:w-[400px] lg:h-[611px] xl:mt-[100px] 3xl:mt-0 xl:w-[450px] xl:h-[711px] 3xl:w-[498px] 3xl:h-[711px]">
                    <Image src="/img-left-hero.jpg"
                           alt=""
                           fill
                           objectFit="contain"
                           sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw,(max-width: 1536px) 33vw, 25vw"
                           style={{transform: "translate3d(0, 0, 0)"}}
                    />
                </div>
                <div className="sm:pt-[326px] lg:pt-[250px] xl:pt-[150px] 3xl:pt-[50px]">
                    <div className="absolute right-2.5 top-[280px] lg:top-0 w-[208px] h-[297px] z-10 lg:relative sm:w-[360px] sm:h-[518px] lg:w-[400px] lg:h-[611px] xl:w-[450px] xl:h-[711px] 3xl:w-[498px] 3xl:h-[711px]">
                        <Image src="/img-right-hero.jpg"
                               alt=""
                               fill
                               objectFit="contain"
                               sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw,(max-width: 1536px) 33vw, 25vw"
                               style={{transform: "translate3d(0, 0, 0)"}}
                        />
                    </div>
                </div>
            </div>
            <div className="absolute sm:left-[10%] lg:left-[20%] 3xl:left-[33%] mt-[560px] sm:mt-[320px] lg:-mt-[50px] 3xl:-mt-[200px] w-[150px] h-[100px] sm:w-[200px] sm:h-[130px] 3xl:w-[243px] 3xl:h-[149px] cursor-pointer">
                <Image src="/btn-portfolio.svg"
                       alt=""
                       fill
                       objectFit="contain"
                       sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw,(max-width: 1536px) 33vw, 25vw"
                       style={{transform: "translate3d(0, 0, 0)"}}
                />
            </div>
        </div>
    )
}

export default Hero
