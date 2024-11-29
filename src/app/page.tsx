"use client";
import michel2 from "./michel2.png";
import michel3 from "./michel3.png";
import michel4 from "./michel4.png";
import localFont from "next/font/local";
import Image from "next/image";

const mantrarimba = localFont({ src: "./mantrarimba.ttf" });
const powerpuff = localFont({ src: "./powerpuff.ttf" });
const tropiland = localFont({ src: "./tropiland.ttf" });

export default function Home() {
  return (
    <div
      className={`${tropiland.className} w-screen h-screen flex flex-col bg-pink-500 overflow-hidden`}
    >
      <div className="grow flex items-center">
        <div>
          <Image
            src={michel2}
            alt="michel"
            className="animate-spinThree w-[20vw] h-auto"
          />
        </div>
        <div className="grow text-l text-purple-800 justify-center text-center flex animate-jump">
          <div>
            <div
              className={`${powerpuff.className} text-6xl uppercase font-black animate-wobble text-lime-300`}
            >
              Menu
            </div>
            <br />
            <br />
            <br />
            <span
              className={`text-2xl uppercase font-semibold text-amber-300 ${mantrarimba.className} animate-pulse`}
            >
              Samedi diner
            </span>
            <br />
            Pasta
            <br />
            <br />
            <span
              className={`text-2xl uppercase font-semibold text-amber-300 ${mantrarimba.className} animate-pulse`}
            >
              Vendredi soir
            </span>
            <br />
            Gratin dauphinois
            <br />
            <br />
            <span
              className={`text-2xl uppercase font-semibold text-amber-300 ${mantrarimba.className} animate-pulse`}
            >
              Samedi dej
            </span>
            <br />
            Soupes d&apos;hiver
            <br />
            Quiche
            <br />
            Crêpes sucrées
            <br />
            <br />
            <span
              className={`text-2xl uppercase font-semibold text-amber-300 ${mantrarimba.className} animate-pulse`}
            >
              Dimanche soir
            </span>
            <br />
            Butternut camembert ou pizza
            <br />
            Grosse miche de pain
            <br />
            Fromages
          </div>
        </div>
        <div>
          <Image
            src={michel4}
            alt="michel"
            className="animate-spinTwo  w-[20vw] h-auto"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={michel3}
          alt="michel "
          className="h-[20vh] w-auto animate-spinOne"
        />
      </div>
    </div>
  );
}
