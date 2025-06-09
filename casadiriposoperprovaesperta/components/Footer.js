import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Name Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/lugo.png" // Adjust path as needed
            alt="I.P.A.B. Logo"
            width={6200}
            height={2000}
            className="w-80 h-30"
          />
          
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contatti</h3>
          <p className="text-sm mb-1">
            <span className="font-medium">tel. 0421 336007</span>
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">email: </span>
            <a href="mailto:info@cdrmonumento.com" className="text-blue-400 hover:underline">info@cdrmonumento.com</a>
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">PRESIDENZA: </span>
            <a href="mailto:presidenza@cdrmonumento.com" className="text-blue-400 hover:underline">presidenza@cdrmonumento.com</a>
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">DIR. SANITARIO: </span>
            <a href="mailto:dir.sanitario@cdrmonumento.com" className="text-blue-400 hover:underline">dir.sanitario@cdrmonumento.com</a>
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">CONTABILITÀ E RETTE: </span>
            <a href="mailto:contabilita@cdrmonumento.com" className="text-blue-400 hover:underline">contabilita@cdrmonumento.com</a>
          </p>
          <p className="text-sm mt-2">
            <span className="font-medium">PEC: </span>
            <a href="mailto:cdrmonumento@halleypec.it" className="text-blue-400 hover:underline">cdrmonumento@halleypec.it</a>
          </p>
        </div>

        {/* Copyright and Other Info */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col justify-end text-sm text-gray-400">
          <p>© 2025 Halley Informatica. Tutti i diritti riservati. Halley DS-047433</p>
          {/* Add social media icons or other links here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;