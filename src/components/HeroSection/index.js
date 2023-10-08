import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 lg:mr-20">
            <a href="#" className="-m-1.5 p-1.5  ">
              <Image
                height={100}
                width={100}
                className="h-[52px] w-auto"
                src="assets/image/Logo.svg"
                alt="logo"
              />
            </a>
          </div>
        </nav>
        <div className="mt-96 flex items-center justify-between p-6 lg:px-8">
          <button
            href="#"
            className="flex  lg:mr-20 rounded-md bg-[#2ABD19] w-[180px] h-12 text-sm font-semibold text-white shadow-sm items-center"
          >
            <div className="flex items-center px-2">
              <Image
                height={100}
                width={100}
                src="assets/image/whatsapp.svg"
                alt="whatsapp"
                className="h-8 w-8"
              />
            </div>
            <span className="text-lg font-medium">كيف يمكننا مساعدتك؟</span>
          </button>
        </div>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <Image
          height={100}
          width={100}
          src="assets/image/Herosection.svg"
          alt="Herosection"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.2] "
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl ">
              امتلك سيرة ذاتية احترافية تزيد من فرص حصولك على وظيفة{" "}
            </h1>
            <p className="mt-6  leading-8  sm:text-3xl text-[#DCAE58]">
              وتميزك عن المنافسين في سوق العمل.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
