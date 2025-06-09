import React from "react";
import Image from "next/image";

const Vision = () => {
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
        VISION E MISSION
        </h2>
        <h3 className="text-2xl font-semibold text-white-800 mb-4 border-b-2 border-blue-500 pb-2">
        LA NASCITA DELL’IPAB
        </h3>
        <div className="text-white-700 leading-relaxed">
          <p className="mb-4">
          A seguito dell’esigenza di dislocare un “Punto Prelievi” nella Frazione di Passarella (lontana da tutti i servizi) permettendo alla popolazione fragile e anziana residente di accedere ad un servizio sanitario comune, in collaborazione con l’Amministrazione Comunale e con le associazioni di volontariato del territorio, IPAB fornisce una figura professionale di Infermiere per l’espletamento della pratica sanitaria del servizio.
          </p>
          <h3 className="text-2xl font-semibold text-white-800 mb-4 border-b-2 border-blue-500 pb-2">
          COS’E’ OGGI L’IPAB
        </h3>
        <p>L’IPAB di oggi è un Centro Servizi con obiettivo fondamentale quello del raggiungimento ed il mantenimento del miglior livello possibile della qualità di vita degli utenti, valorizzando ogni risorsa psico-fisica e ogni potenzialità residua, al fine di favorire l’autonomia, le relazioni familiari e sociali, per tramite anche della fattiva collaborazione delle associazioni di volontariato del nostro territorio.
        </p>
        
        </div>
      </div>
    </section>
  );
};

export default Vision;
