import { DropdownButton } from "./ui/dropdown";

export function SourcePage({ onSelect, disabledSources = [], userData, handleLogOut }) {
  const sources = [
    {
      name: 'GCS Bucket',
      icon: '📦',
      description: 'Connect to your Google Cloud Storage bucket to load data.',
    },
    {
      name: 'Realtime API',
      icon: '🌐',
      description: 'Stream data in real-time by integrating with an API.',
    },
    {
      name: 'Custom Source',
      icon: '🧩',
      description: 'Create a custom source integration for specific needs.',
    },
    {
      name: 'Databases',
      icon: '🗃️',
      description: 'Connect to your database to load the data',
    },
  ];

  const handleSourceSelect = (sourceName: string) => {
    if (onSelect) onSelect(sourceName);
  };

  return (
    <div className="bg-gray-100 p-6 text-gray-900 flex-1 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="w-full max-w-4xl text-center">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Select Your Data Source</h1>
          <p className="mt-2 text-lg text-gray-600">
            Choose a method to connect and load your data into the system.
          </p>
        </header>

        <DropdownButton userData={userData} handleLogOut={handleLogOut}/>

        <main className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sources.map((source) => {
            const isDisabled = disabledSources.includes(source.name);
            return (
              <button
                key={source.name}
                onClick={() => handleSourceSelect(source.name)}
                disabled={isDisabled}
                className={`group flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out
                  border border-gray-200 hover:shadow-2xl hover:border-gray-300 transform hover:-translate-y-1
                  text-center focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50
                  ${isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
                aria-disabled={isDisabled}
              >
                <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {source.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{source.name}</h3>
                <p className="text-sm text-gray-500">{source.description}</p>
              </button>
            );
          })}
        </main>
      </div>
    </div>
  );
}