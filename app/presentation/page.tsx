import React from 'react';

export default function Presentation() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Présentation</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Qui suis-je ?</h2>
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>
            Je m'appelle Esteban, j'ai 14 ans et je suis en 3ème au collège de la Source.
          </p>
          <p>
            Je suis passionné par le football et les jeux-vidéo. Je suis curieux et j'aime apprendre de nouvelles choses.
          </p>
          <p>
            J'ai choisi cette entreprise pour mon stage car je suis intéressé par le fonctionnement d'une entreprise de services et je veux en apprendre plus sur les différents métiers qu'elle propose.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Objectifs du stage</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Découvrir le monde professionnel</li>
          <li>Comprendre le fonctionnement d&apos;une entreprise</li>
          <li>Observer différents métiers</li>
          <li>Préciser mon projet d&apos;orientation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Période du stage</h2>
        <p className="text-gray-700">
          Du [date] au [date]
        </p>
      </section>
    </div>
  );
}
