import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Rapport de Stage
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/presentation" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Présentation
            </Link>
            <Link href="/entreprise" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              L&apos;Entreprise
            </Link>
            <Link href="/missions" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Missions
            </Link>
            <Link href="/conclusion" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Conclusion
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-primary-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
