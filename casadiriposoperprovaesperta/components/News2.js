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
          CENTRO DIURNO "ANCHISE"
        </h2>
        <div className="text-white-700 leading-relaxed">
          <p className="mb-4">
            Un centro diurno è un servizio territoriale di tipo semi-residenziale, rivolto prevalentemente ad anziani con vario grado di non autosufficienza, in particolare quelli con prevalente disturbo cognitivo. Obiettivi del Servizio Gli obiettivi principali del centro diurno sono:
          </p>
          <ul className="list-disc pl-5">
            <li>Sostegno e sollievo ai familiari e alla rete sociale di supporto.</li>
            <li>Contrastare fenomeni di isolamento e solitudine.</li>
            <li>Potenziare, mantenere e/o compensare abilità e competenze relative all'autonomia, all'identità, all'orientamento spazio-temporale, alle relazioni interpersonali e alla socializzazione.</li>
            <li>Potenziare la rete di servizi per le persone anziane, proponendo interventi personalizzati e progetti specifici che rispondano ai bisogni dei singoli.</li>
          </ul>
          <p className="mb-4">
            Attività del Servizio Le attività offerte dal centro diurno includono:
          </p>
          <ul className="list-disc pl-5">
            <li>Assistenza tutelare diurna.</li>
            <li>Igiene e cura della persona, con stimolazione delle capacità residue.</li>
            <li>Somministrazione di colazione, pranzo e merenda, con aiuto nell'alimentazione.</li>
            <li>Attività ricreative, culturali e occupazionali, per il mantenimento delle capacità espressive e relazionali, compatibilmente con le condizioni psico-fisiche.</li>
            <li>Attività terapeutico-riabilitativa e fisioterapica.</li>
            <li>Supporto psicologico e sociale sia agli utenti che ai familiari.</li>
            <li>Assistenza sanitaria.</li>
          </ul>
          <p className="mb-4">
            Figure Professionali Il team del centro diurno è composto dalle seguenti figure professionali:
          </p>
          <ul className="list-disc pl-5">
            <li>Coordinatore responsabile</li>
            <li>Infermiere professionale</li>
            <li>Operatore socio-sanitario (OSS)</li>
            <li>Assistente sociale</li>
            <li>Educatore professionale</li>
            <li>Fisioterapista</li>
            <li>Psicologo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;
