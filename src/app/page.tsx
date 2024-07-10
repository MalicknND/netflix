import Image from "next/image";
import Logo from "../../public/images/logonetflix.png";
import { AccordionDemo } from "../components/Accordion/Accordion";
import Footer from "@/components/partials/footer/Footer";
import Header from "@/components/partials/header/Header";

export default function Home() {
  return (
    <div>
      {/* <div className="relative h-96 bg-[url('/images/background.jpg')]">
        <Image
          src={Logo}
          alt="Logonetnetflix image"
          width={120}
          height={120}
          className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
          priority
        />
      </div> */}
      <div>
        <Header />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col mx-4 md:mx-40 mt-24 items-center gap-8 md:gap-0 mb-20">
        <div>
          <h2 className="text-4xl md:text-6xl mb-5">
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
            width={640}
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
          <h2 className="text-3xl md:text-6xl mb-5">
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
