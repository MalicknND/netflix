import Image from "next/image";
import Logo from "../../public/images/logonetflix.png";
import { AccordionDemo } from "../components/Accordion/Accordion";
import Footer from "@/components/partials/footer/Footer";
import Header from "@/components/partials/header/Header";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="relative h-[36rem] md:h-[28rem] bg-[url('/images/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <Header />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-10">
          <h1 className="text-white font-bold text-[1.5rem] mt-4 mb-4 sm:text-[3rem]">
            Films et séries en illimité, et bien plus
          </h1>
          <h2 className="text-white text-[25px] mb-4 ">
            Où que vous soyez. Annulez à tout moment.
          </h2>
          <div className="mt-1.5 mx-0 ">
            <p className="text-white text-[18px] mb-4">
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre <br />
              abonnement.
            </p>
          </div>
          <div className="flex flex-col gap-4  md:flex md:flex-row md:items-center md:justify-center md:gap-4">
            <Input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block py-[1.55rem]  pr-[4.25rem] bg-transparent border border-gray-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
            <Button variant="destructive" className="py-[1.55rem]">
              Commencer
            </Button>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col mx-4 md:mx-40 mt-24 items-center gap-8 md:gap-0 mb-20">
        <div>
          <h2 className="text-3xl md:text-5xl mb-5">
            Regardez Netflix sur votre TV
          </h2>
          <p className="text-lg md:text-2xl">
            Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast,
            Apple TV, lecteur Blu-ray et bien plus.
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
            className="absolute top-[15%] left-[12%] w-[76%] h-[70%] object-cover -z-10"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col mx-4 md:mx-60 mt-24 items-center gap-8 md:gap-0 mb-20">
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
      </section>
      <section className="">
        <AccordionDemo />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
