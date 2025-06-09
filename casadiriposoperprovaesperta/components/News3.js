import React from "react";
import Image from "next/image";

const News = () => {
  return (
    <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-semibold text-white-800 mb-4 border-b-2 border-blue-500 pb-2">
         
        </h2>
        <div className="mb-4">
          <Image
            src="/images/lugo.png" // Adjust path as needed
            alt="News Image"
            width={2000}
            height={100}
            className="w-full h-auto"
          />
        </div>
       
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white-800 mb-4 border-b-2 border-blue-500 pb-2">
        CENTRO ANZIANI "COLORA IL TUO TEMPO"
        </h2>
        <div className="text-white-700 leading-relaxed">
          <p className="mb-4">
          Il centro anziani è un luogo di incontro rivolto alla popolazione anziana autosufficiente del territorio sandonatese che ha come scopo il contrasto di fenomeni di isolamento e solitudine, portando momenti di stimolo, di benessere e serenità per una maggiore integrazione sociale.
          Il servizio viene svolto grazie da una collaborazione con le associazioni di volontariato presenti nel territorio e con l’Amministrazione Comunale che mette a disposizione gli spazi siti in Viale Libertà n. 10.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;
