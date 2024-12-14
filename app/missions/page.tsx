import React from 'react';

export default function Missions() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Missions et Activités</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Planning de la semaine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Exemple de journée */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Lundi</h3>
            <p className="text-gray-700">[Description des activités]</p>
          </div>
          {/* Ajoutez d&apos;autres jours de la même manière */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Missions réalisées</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Mission 1</h3>
            <p className="text-gray-700">[Description de la mission]</p>
            <p className="text-gray-600 mt-2">[Ce que j&apos;ai appris]</p>
          </div>
          {/* Ajoutez d&apos;autres missions de la même manière */}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Compétences développées</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Travail en équipe</li>
          <li>Communication professionnelle</li>
          <li>Organisation et ponctualité</li>
          <li>[Autres compétences spécifiques]</li>
        </ul>
      </section>
    </div>
  );
}
