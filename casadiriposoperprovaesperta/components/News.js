import React from "react";
import Image from 'next/image';

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
        <div className="bg-gray-100 p-2 rounded-md flex items-center justify-between text-blue-700 hover:text-blue-900 cursor-pointer">
          <a href="#" className="flex items-center space-x-2">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-medium">
              Segui il feed di tutti i contenuti
            </span>
          </a>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
        {/* Placeholder for news items */}
        <div className="mt-4 text-gray-600 text-sm">
          <p>Nessun evento o notizia recente. Controlla più tardi.</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white-800 mb-4 border-b-2 border-blue-500 pb-2">
          PRESENTAZIONE
        </h2>
        <div className="text-white-700 leading-relaxed">
          <p className="mb-4">
            Qualche breve cenno alla Storia dell'IPAB "MONUMENTO AI CADUTI IN
            GUERRA. Dopo l'annessione del Veneto all'Italia, l'Amministrazione
            Comunale di San Donà ebbe un diverso assetto, rispetto a quello
            avuto sino ad ora; organo principe divenne il Consiglio Comunale, e
            l'organo esecutivo la Giunta. Il Consiglio Comunale era deliberante,
            e i suoi membri venivano eletti dal Consiglio Comunale tra i propri
            membri. A livello nazionale nel 1882 si annoverano all'elettorato
            politico tutti i cittadini maggiorenni che superano il limite del
            censo scolastico obbligatorio oppure hanno un censo di 19,80. Il Sud
            Italia dopo nel 1913 deliberatamente obbligatorio.
          </p>
          <p>
            Dopo l'annessione del Veneto all'Italia, l'Amministrazione Comunale
            di San Donà ebbe un diverso assetto, rispetto a quello avuto sino ad
            ora; organo principe divenne il Consiglio Comunale, e l'organo
            esecutivo la Giunta. Il Consiglio Comunale era deliberante, e i suoi
            membri venivano eletti dal Consiglio Comunale tra i propri membri.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Continua a leggere...
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;