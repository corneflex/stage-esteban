import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-primary-600">Rapport de Stage de 3ème</h1>
        <p className="text-2xl text-gray-700 mb-2">[Nom de l&apos;élève]</p>
        <p className="text-xl text-gray-600">[Nom de l&apos;entreprise] - [Dates du stage]</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <a href="/presentation" 
           className="group block p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700">Présentation</h2>
          <p className="text-gray-600">Découvrez qui je suis et les objectifs de mon stage</p>
        </a>

        <a href="/entreprise" 
           className="group block p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700">L&apos;Entreprise</h2>
          <p className="text-gray-600">Présentation de l&apos;entreprise qui m&apos;a accueilli</p>
        </a>

        <a href="/missions" 
           className="group block p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700">Missions</h2>
          <p className="text-gray-600">Les activités réalisées pendant mon stage</p>
        </a>

        <a href="/conclusion" 
           className="group block p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700">Conclusion</h2>
          <p className="text-gray-600">Bilan et réflexions sur cette expérience</p>
        </a>
      </div>
    </div>
  );
}
