"use client"

import Image from "next/image"
import personalLogo from "./../../../public/assets/images/logo.svg"
import Polygon from "../../../public/assets/images/polygon"
import Rect from "../../../public/assets/images/rect"
import { useEffect } from "react"
import Link from "next/link"
import Tools from "./Tools"


export default function Home() {
  return (
    <main className="relative pb-8 md:flex items-start -mx-px">
      <div className="font-mono flex ">
        <div className="flex flex-col gap-8 justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <p>
                Greetings! I&apos;m Redouan, cs student{" "}
                <a href="https://www.42network.org/" target="_blank" className="text-mainGray underline underline-offset-3">
                  @42TheNetwork
                </a>{" "}
              </p>
              <p>Versatile software engineering graduate with a solid background in low-level programming, graphics and web development. Learned how systems work from the ground up through hands-on academic projects that mixed theory with real practice. Quick to adapt, eager to learn, and comfortable in fast-moving environments.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <Tools />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

