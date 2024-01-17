// import Image from "next/image";
//
// const Header = () => {
//   return(
//       <div className="px-5 xs:px-14 sm:px-24 md:px-32 lg:px-44 xl:px-48 2xl:px-56 3xl:px-[344px] pt-[60px]">
//         <div className="flex flex-row items-center justify-between">
//             <div className="flex flex-row gap-[10px] lg:gap-[50px] 3xl:gap-[100px] text-lg text-[#FFFFFFB2] hidden md:flex">
//                 <div>Portfolio</div>
//                 <div>Info</div>
//             </div>
//             <Image src="/Rotaruvv-logo.svg" alt="" width={200} height={80} />
//             <div className="flex flex-row gap-[20px] lg:gap-[50px] 3xl:gap-[100px] text-lg text-[#FFFFFFB2] hidden md:flex">
//                 <div>About me</div>
//                 <div>Contact</div>
//             </div>
//         </div>
//       </div>
//   )
// }
//
// export default Header;

'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useWindowWidth from '../../../utils/hooks/use-window-width';
import Hamburger from '../../../public/Hamburger';
import useScrollY from '../../../utils/hooks/use-scroll-y';
import React from 'react';

const Header = () => {
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const width = useWindowWidth();
    const scrollY = useScrollY();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <header
            className={`fixed top-0 left-0 z-[999] w-full transition-colors delay-100 ${
                scrollY > 80 ? 'bord er-b border-b-white/[30%] bg-[#1B1B1B]' : 'bg-transparent'
            }`}
        >
            <div className="px-5 xs:px-14 sm:px-24 md:px-32 lg:px-44 xl:px-48 2xl:px-56 3xl:px-[344px] bg-transparent h-[70px] py-[16px] lg:py-[30px] 2xl:py-[55px] flex flex-row justify-center items-center">
                <div className="flex flex-row gap-[40px]">
                    <div className="relative block lg:hidden">
                        <div className="relative z-[999] w-[200px] h-[50px] lg:h-[80px]">
                            <Image src="/Rotaruvv-logo.svg"
                                   alt=""
                                   fill
                                   objectFit="contain"
                                   sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw,(max-width: 1536px) 33vw, 25vw"
                                   style={{ transform: "translate3d(0, 0, 0)" }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between hidden lg:flex">
                        <div className="flex flex-row gap-[10px] md:gap-[20px] lg:gap-[50px] 3xl:gap-[100px] text-lg text-[#FFFFFFB2]">
                            <div>Portfolio</div>
                            <div>Info</div>
                        </div>
                        <div className="px-5">
                            <Image src="/Rotaruvv-logo.svg" alt="" width={200} height={80} />
                        </div>
                        <div className="flex flex-row gap-[10px] md:gap-[20px] lg:gap-[50px] 3xl:gap-[100px] text-lg text-[#FFFFFFB2]">
                            <div>About me</div>
                            <div>Contact</div>
                        </div>
                    </div>
                    <div className="relative z-[100]">
                        <div
                            className={`${
                                hamburgerOpen && width <= 1024
                                    ? 'fixed flex flex-col bg-[black] top-0 right-0 bottom-0 w-full py-[50px] justify-center items-center gap-6 -mt-[400px]'
                                    : 'relative grid-cols-4 hidden lg:flex lg:gap-[35px] flex items-center'
                            }`}
                        >
                            <div className="block lg:hidden">
                                <div className="flex flex-col gap-2 text-lg text-[#FFFFFFB2]">
                                    <div>Portfolio</div>
                                    <div>Info</div>
                                    <div>About me</div>
                                    <div>Contact</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-full flex justify-end lg:hidden py-6 z-[9999]`} onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
            </div>
        </header>
    );
};

export default Header;
