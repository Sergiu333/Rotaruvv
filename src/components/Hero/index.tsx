import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="3xl:px-[90px] 3xl:pt-[173px] relative">
            <div className="absolute left-0 right-0 top-[407px] w-full z-10">
                <hr className="border border-white/[.5] w-[50%] mt-[34px] absolute left-0"/>
                <div className="hero-text lg:pl-[20%] 3xl:pl-[511px] text-[70px] lg:text-[127px]">Photography</div>
                <hr className="border border-white/[.5] w-[60%] mt-[11px] absolute right-0"/>
                <div
                    className="hero-text_bottom absolute right-0 pt-[33px] lg:pr-[20%] 3xl:pr-[565px] text-[70px] lg:text-[127px]">as
                    Art
                </div>
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="relative 3xl:w-[498px] 3xl:h-[711px]">
                    <Image src="/img-left-hero.jpg"
                           alt=""
                           fill
                           objectFit="contain"
                           sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw,(max-width: 1536px) 33vw, 25vw"
                           style={{transform: "translate3d(0, 0, 0)"}}
                    />
                </div>
                <div className="pt-[50px]">
                    <div className="relative 3xl:w-[498px] 3xl:h-[711px]">
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
            <div className="absolute left-[33%] -mt-[200px] 3xl:w-[243px] 3xl:h-[149px] cursor-pointer">
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
