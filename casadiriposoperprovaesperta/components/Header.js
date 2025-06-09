import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-1 py-1 flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/lugo.png" // Adjust path as needed
            alt="I.P.A.B. Logo"
            width={6200}
            height={2000}
            className="w-80 h-30"
          />
        </div>
        <nav className="mt-4 w-full">
          <ul className="flex justify-between text-black font-medium border-t-2 border-blue-600 pt-2">
            <li><a href="/" className="hover:text-blue-600">Homepage</a></li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-600 ">Servizi</a>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg pl-30">
                <li><a href="/servizi" className="hover:text-blue-600">CENTRO DIURNO "ANCHISE"</a></li>
                <li><a href="/servizi2" className="hover:text-blue-600">CENTRO ANZIANI "COLORA IL TUO TEMPO"</a></li>
                <li><a href="/servizi3" className="hover:text-blue-600">SERVIZIO ASSISTENZA DOMICILIARE S.A.D.</a></li>
                <li><a href="/servizi4" className="hover:text-blue-600">SPORTELLO ASSISTENTI FAMILIARI</a></li>
                <li><a href="/servizi5" className="hover:text-blue-600">PUNTO PRELIEVI "PASSARELLA" SERVIZIO INFERMIERISTICO</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-600">PERCHE' L'IPAB</a>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg pl-30">
                <li><a href="/perche" className="hover:text-blue-600">VISION E MISSION</a></li>
                <li><a href="/statuto" className="hover:text-blue-600"> STATUTO</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-600">I.P.A.B. Informa</a>
              <div className="absolute hidden group-hover:flex bg-white shadow-lg p-4 space-x-8 xl-full">
                <div>
                  <h4><a href="/" className="font-bold hover:text-blue-600">Accesso agli atti</a></h4>
                  <ul>
                    <li>Il servizio consente la consultazione degli atti amministrativi in corso di pubblicazione all'Albo Pretorio on-line, nonchè degli atti la cui pubblicazione è scaduta.</li>
                    <li>Albo pretorio</li>
                    <li>⚫ Delibere</li>
                    <li>⚫ Determine</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold"><a href="#" className="hover:text-blue-600">Amministrazione trasparente</a></h4>
                  <ul>
                    <li><a href="#" className="hover:text-blue-600">In questa sezione sono pubblicati, raggruppati secondo le indicazioni di legge, documenti, informazioni e dati concernenti l'organizzazione dell' amministrazione, le attivita' e le sue modalita' di realizzazione.</a></li>
                    <li><a href="#" className="hover:text-blue-600">Amministrazione trasparente</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><a href="#" className="hover:text-blue-600">Sostienici</a></li>
            <li>
              <div className="relative group">
                <a href="#" className="hover:text-blue-600 flex items-center">
                  Accessi riservati
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </a>
                {/* Dropdown content (can be added here) */}
              </div>
            </li>
            <li><a href="/extranet" className="hover:text-blue-600">Extranet</a></li>
            <li><a href="#" className="hover:text-blue-600">PRIVACY</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;