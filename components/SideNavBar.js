import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function SideNavbar() {
  const router = useRouter();
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center cursor-pointer ">
            <Link href="/">
              <Image src="/logo.svg" alt="Moduit" width={80} height={30} />
            </Link>

            <div className=" my-20 border-b border-gray-100 pb-4 ">
              <Link href="/">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5">
                  <Image src="/Q1.svg" alt="q1" width={25} height={25} />

                  <a
                    className={`text-base group-hover:text-white font-semibold ${
                      router.pathname == "/"
                        ? "text-gray-400 "
                        : "text-gray-800"
                    }`}
                  >
                    Question 1{" "}
                    {router.pathname == "/" ? (
                      <span className="pl-20 border-r-4 border-blue-800"></span>
                    ) : (
                      ""
                    )}
                  </a>
                </div>
              </Link>

              <Link href="/question2">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5">
                  <Image src="/Q2.svg" alt="q1" width={25} height={25} />

                  <a
                    className={`text-base group-hover:text-white font-semibold ${
                      router.pathname == "/question2"
                        ? "text-gray-400 "
                        : "text-gray-800"
                    }`}
                  >
                    Question 2{" "}
                    {router.pathname == "/question2" ? (
                      <span className="pl-20 border-r-4 border-blue-800"></span>
                    ) : (
                      ""
                    )}
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
