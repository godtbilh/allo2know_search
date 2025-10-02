export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-tight sm:text-5xl">
          Allo2Know Search
        </h1>

        <div className="w-full">
          {/* Search bar placeholder */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-6 py-4 text-lg border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-foreground/40 transition-colors bg-background"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
