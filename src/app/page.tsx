import Image from "next/image";
import { AccordionDemo } from "../components/Accordion/Accordion";
import Footer from "@/components/partials/footer/Footer";
import Header from "@/components/partials/header/Header";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="relative h-[36rem] md:h-[36rem] bg-[url('/images/background.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <Header />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-10 px-4">
          <h1 className="text-white font-bold text-[1.5rem] mt-4 mb-4 sm:text-[3rem]">
            Films et séries en illimité, et bien plus
          </h1>
          <p className="text-white text-[1.3rem] mb-4">
            Où que vous soyez. Annulez à tout moment.
          </p>
          <div className="mt-1.5 mx-0">
            <p className="text-white text-[1rem] mb-4">
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre <br />
              abonnement.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex md:flex-row md:items-center md:justify-center md:gap-4 w-full max-w-md">
            <Input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 font-semibold w-full py-[1.55rem] bg-transparent border border-gray-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
            <Button
              variant="destructive"
              className="py-[1.55rem] bg-[#E50815] flex items-center justify-center"
            >
              Commencer
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="z-10 container mx-auto px-4">
        <div
          style={{
            background: `radial-gradient(51.39% 511.66% at 47.68% -217.91%,#ff9900 0%, #e50914 17.27%,#0e1b4f 79.44%,#000413 100%)`,
          }}
          className="flex flex-col md:flex-row relative justify-center bg-[rgb(14,27,79)] shadow-[0px_-8px_25px_rgba(0,0,0,0.5)] rounded-md mx-4 md:mx-[74px] text-white p-[22px]"
        >
          <div className="flex justify-center md:justify-start md:mr-8 mb-4 md:mb-0">
            <Image
              src="/images/popcorn.png"
              alt="Popcorn"
              width={100}
              height={100}
            />
          </div>
          <div className="text-center md:text-left">
            <p className="m-0 text-[1.2rem] font-bold">
              Le Netflix que vous aimez pour juste 5,99 €.
            </p>
            <p className="mt-4 mb-4">
              Choisissez l&apos;offre Standard avec pub.
            </p>
            <Link href="/subscribe" className="text-blue-500 underline">
              Commencer
            </Link>
          </div>
        </div>
      </div>

      {/* First Section */}
      <section className="py-8 border-t-8 border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-40 items-center gap-8 mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl mb-5">
              Regardez Netflix sur votre TV
            </h2>
            <p className="text-lg md:text-2xl">
              Regardez Netflix sur votre Smart TV, PlayStation, Xbox,
              Chromecast, Apple TV, lecteur Blu-ray et bien plus.
            </p>
          </div>
          <div className="relative w-full md:w-auto">
            <Image
              src="/images/tv.png"
              alt="TV image"
              width={620}
              height={360}
              className="w-full h-auto"
            />
            <video
              muted
              autoPlay
              loop
              className="absolute top-[15%] left-[12%] w-[76%] h-[70%] object-cover"
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="border-t-8 border-neutral-900 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-60 items-center gap-8 mb-20">
          <div className="relative w-full md:w-auto">
            <Image
              src="/images/device-pile.png"
              alt="TV image"
              width={640}
              height={360}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl mb-5">Où que vous soyez</h2>
            <p className="text-lg md:text-2xl">
              Regardez des films et séries en accès illimité sur votre TV,
              smartphone, tablette et ordinateur.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="border-t-8 border-neutral-900 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-60 items-center gap-8 mb-20">
          <div className="relative w-full md:w-auto">
            <Image
              src="/images/child.png"
              alt="TV image"
              width={640}
              height={360}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl mb-5">
              Créer des profils pour les enfants
            </h2>
            <p className="text-lg md:text-2xl">
              Envoyez vos enfants à l&apos;aventure avec leurs personnages
              préférés dans un espace conçu spécialement pour eux, gratuitement
              avec votre abonnement.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="border-t-8 border-neutral-900 py-8">
        <AccordionDemo />
      </section>

      {/* Fourth Section */}
      <section className="border-t-8 border-neutral-900 py-8">
        <Footer />
      </section>
    </div>
  );
}
