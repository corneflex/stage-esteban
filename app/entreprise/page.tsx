import React from 'react';

export default function Entreprise() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">L&apos;Entreprise</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Présentation de l&apos;entreprise</h2>
        <div className="text-gray-700 space-y-4">
          <p>[Nom de l&apos;entreprise]</p>
          <p>[Description de l&apos;activité principale]</p>
          <p>[Localisation]</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Organisation</h2>
        <div className="text-gray-700 space-y-4">
          <p>[Structure de l&apos;entreprise]</p>
          <p>[Différents services]</p>
          <p>[Nombre d&apos;employés]</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Mon service d&apos;accueil</h2>
        <div className="text-gray-700 space-y-4">
          <p>[Description du service]</p>
          <p>[Rôle du service dans l&apos;entreprise]</p>
          <p>[Présentation du tuteur]</p>
        </div>
      </section>
    </div>
  );
}
