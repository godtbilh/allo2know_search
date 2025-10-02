export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <main className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Allo2Know Search
        </h1>

        {/* Search bar placeholder */}
        <div className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-center text-gray-500 dark:text-gray-400">
          Search bar will go here
        </div>
      </main>
    </div>
  );
}
