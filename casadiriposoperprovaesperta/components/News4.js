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
        SERVIZIO DI ASSISTENZA DOMICILIARE S.A.D.
        </h2>
        <div className="text-white-700 leading-relaxed">
          <p className="mb-4">
          Il servizio di Assistenza Domiciliare è un servizio sociale territoriale rivolto ai singoli o a nuclei familiari in difficoltà che, per specifiche esigenze di ordine socio-assistenziali permanenti o temporanee, hanno necessità di aiuto a domicilio, sostegno e collaborazione per attività relative alla cura della persona, al governo della casa, alla vita di relazione e al superamento di difficoltà organizzative familiari.
          </p>
          <h3>Obiettivi:</h3>
          <ul className="list-disc pl-5">
            <li>Mantenimento, inserimento e reinserimento delle persone in stato di bisogno nell’ambiente familiare e sociale di appartenenza.</li>
            <li>Promozione e recupero delle capacità di autonomia delle persone attraverso le risorse personali, familiari, amicali e di vicinato presenti nel territorio.</li>
            <li>Contrasto dei processi di emarginazione sociale, isolamento e solitudine.</li>
          </ul>
          <h3>Attraverso il SAD, inoltre, si intende:</h3>
          <ul className="list-disc pl-5">
            <li>Favorire la creazione di legami significativi e relazioni sociali e supportare la rete sociale esistente attraverso la programmazione di un insieme di servizi e prestazioni a tutela della persona fragile.</li>
            <li>Promuovere una comunità sempre più responsabile verso le persone e le situazioni familiari più fragili.</li>
            <li>Sviluppare servizi e interventi avviati in tema di promozione della domiciliarità e del lavoro di comunità.</li>
          </ul>
          <p className="mb-4">
            L’IPAB collabora con il servizio sociale dell’Amministrazione Comunale nell’erogazione di questo servizio per il mantenere il più a lungo possibile l’anziano nel suo “mondo” di appartenenza, evitandone l’istituzionalizzazione prima del tempo necessario.
          </p> 
          
        </div>
      </div>
    </section>
  );
};

export default News;
