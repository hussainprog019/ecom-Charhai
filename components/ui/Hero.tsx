import Image from "next/image";
import Banner from "../../public/shoe.png"
import { ButtonWithIcon } from "./bulbutton";

export function Hero() {
    return (
      <main className="flex m-6 justify-center">
        <div className="w-2/5 ">
      <div className=" px-16 pt-16 ">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
    <p className="py-10">
    <ButtonWithIcon/>
    </p>
    </div>
    </div>
    <div>
      <Image src={Banner} alt="banner"/>
    </div>
    </main>
    )
  }
  