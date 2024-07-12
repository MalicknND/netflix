import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
      <h2 className="text-5xl text-center py-6">Foire aux questions</h2>
      <AccordionItem value="item-1">
        <AccordionTrigger className=" p-4 cursor-pointer border-b border-gray-300">
          Qu&apos;est ce que Netflix ?
        </AccordionTrigger>
        <AccordionContent className="p-4 border-b border-gray-300">
          Netflix est un service de streaming qui propose une vaste sélection de
          séries, films, animes, documentaires et autres programmes sur des
          milliers d&apos;appareils connectés à Internet.
          <br />
          <br />
          Regardez tout ce que vous voulez, quand vous voulez, à un prix mensuel
          très attractif. Découvrez de nouveaux films et séries chaque semaine,
          il y en a pour tous les goûts !
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className=" p-4 cursor-pointer border-b border-gray-300">
          Est-ce que c&apos;est stylé ?
        </AccordionTrigger>
        <AccordionContent className="p-4 border-b border-gray-300">
          Netflix est un service de streaming dont les membres peuvent profiter
          d&apos;une gamme variée de séries, de films, de documentaires et bien
          plus encore sur des milliers d&apos;appareils connectés à Internet.
          Vous pouvez regarder autant de contenu que vous le souhaitez, à tout
          moment et en tout lieu, moyennant un forfait mensuel peu élevé. Il y a
          toujours quelque chose de nouveau à découvrir et de nouvelles séries
          et films sont ajoutés chaque semaine.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="p-4 cursor-pointer border-b border-gray-300">
          Combien coûte Netflix ?
        </AccordionTrigger>
        <AccordionContent className="p-4 border-b border-gray-300">
          Moyennant un forfait mensuel, vous pouvez profiter de Netflix sur
          votre smartphone, tablette, téléviseur intelligent, ordinateur
          portable ou appareil de streaming. Les abonnements coûtent entre 4,99
          € et 19,99 € par mois. Pas de frais supplémentaires, pas de contrats.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="p-4 cursor-pointer border-b border-gray-300">
          Ou puis-je regarder Netflix ?
        </AccordionTrigger>
        <AccordionContent className="p-4 border-b border-gray-300">
          Netflix, c&apos;est où vous voulez, quand vous voulez. Connectez-vous
          à votre compte pour regarder Netflix en ligne sur netflix.com depuis
          votre ordinateur ou tout appareil connecté à Internet avec
          l&apos;application Netflix, comme les Smart TV, smartphones,
          tablettes, lecteurs de streaming et consoles de jeu.
          <br />
          <br />
          Vous pouvez aussi télécharger vos séries préférées avec
          l&apos;application iOS ou Android. Téléchargez des titres pour les
          regarder sur votre appareil mobile, même sans connexion Internet.
          Emportez Netflix partout avec vous.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="p-4 cursor-pointer border-b border-gray-300">
          Comment puis-je annuler mon offre ?
        </AccordionTrigger>
        <AccordionContent className="p-4 border-b border-gray-300">
          Netflix offre une grande souplesse. Pas de contrat compliqué. Sans
          engagement. Deux clics suffisent pour annuler votre compte en ligne.
          Pas de frais d&apos;annulation : ouvrez ou fermez votre compte à tout
          moment.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
