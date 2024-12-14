import React from 'react';

export default function Conclusion() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Conclusion</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Bilan personnel</h2>
        <div className="text-gray-700 space-y-4">
          <p>[Ce que m&apos;a apporté ce stage]</p>
          <p>[Les découvertes importantes]</p>
          <p>[Les surprises et les difficultés rencontrées]</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Impact sur mon projet professionnel</h2>
        <div className="text-gray-700 space-y-4">
          <p>[Comment ce stage influence mon orientation]</p>
          <p>[Mes projets d&apos;études]</p>
          <p>[Mes objectifs professionnels]</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Remerciements</h2>
        <div className="text-gray-700">
          <p>[Remerciements aux personnes qui m&apos;ont accompagné]</p>
        </div>
      </section>
    </div>
  );
}
