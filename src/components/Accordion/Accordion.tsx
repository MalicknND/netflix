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
      <AccordionItem value="item-1">
        <AccordionTrigger className=" p-4 cursor-pointer border-b border-gray-300">
          Qu&apos;est ce que Netflix ?
        </AccordionTrigger>
        <AccordionContent className="p-4 border-b border-gray-300">
          Netflix propose une vaste sélection de longs métrages, documentaires,
          séries, dessins animés, originaux Netflix primés et bien plus encore.
          Regardez autant que vous le souhaitez, aussi souvent et quand vous le
          souhaitez. Jetez un œil à une petite sélection de nos titres.
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
    </Accordion>
  );
}
