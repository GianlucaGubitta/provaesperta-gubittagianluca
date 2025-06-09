import React from "react";
import Image from "next/image";

const News = () => {
  return (
    <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-semibold text-white-800 mb-4 border-b-2 border-blue-500 pb-2">
          Eventi e News
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
       PUNTO PRELIEVI "PASSARELLA" SERVIZIO INFERMIERISTICO
        </h2>
        <div className="text-white-700 leading-relaxed">
          <p className="mb-4">
          A seguito dell’esigenza di dislocare un “Punto Prelievi” nella Frazione di Passarella (lontana da tutti i servizi) permettendo alla popolazione fragile e anziana residente di accedere ad un servizio sanitario comune, in collaborazione con l’Amministrazione Comunale e con le associazioni di volontariato del territorio, IPAB fornisce una figura professionale di Infermiere per l’espletamento della pratica sanitaria del servizio.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default News;
