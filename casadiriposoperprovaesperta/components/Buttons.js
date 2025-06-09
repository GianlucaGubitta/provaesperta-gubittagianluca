import React from 'react';

const Buttons = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-right mb-4">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 12H9v-2h2v2h-1zm2-4H9V6h2v4z"></path></svg>
          Amministrazione trasparente
        </button>
        <button className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.928 2.227A9.998 9.998 0 0110 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10a9.998 9.998 0 012.227-7.072zm6.204 11.455c.39.39.99.39 1.38 0l2-2a.999.999 0 00-1.414-1.414L10 12.586l-1.293-1.293a.999.999 0 10-1.414 1.414l2 2z"></path></svg>
          Albo pretorio online
        </button>
        <button className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12h2v2H9v-2zm0-4h2v3H9V8z"></path></svg>
          Contatti
        </button>
        <button className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
          PagoPA
        </button>
      </div>
    </section>
  );
};

export default Buttons;