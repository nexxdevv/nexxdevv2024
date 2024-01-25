/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Josefin_Sans } from "@next/font/google"
import Image from "next/image"
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "700" })

const Tech = () => {
  return (
    <div className="w-full mx-auto max-w-7xl sm:max-w-fit">
      <ul className="grid flex-wrap items-center justify-center grid-cols-4 gap-2 scale-90">
        <li className="">
          <Image
            src="/assets/technologies/node.png"
            alt=""
            // className="w-[4rem]"
            height={86}
            width={86}
          />
        </li>
        <li className="grid place-items-center">
          <Image
            src="/assets/technologies/react.png"
            alt=""
            height={46}
            width={46}
          />
        </li>
        <li className="grid place-items-center">
          <Image
            src="/assets/technologies/next.png"
            alt=""
            className="w-[4rem] dark:invert"
            height={56}
            width={56}
          />
        </li>
        <li className="grid place-items-center">
          <Image
            height={56}
            width={56}
            src="/assets/technologies/tw.png"
            alt=""
            // className="w-[3rem]"
          />
        </li>
      </ul>
    </div>
  )
}

export default Tech
