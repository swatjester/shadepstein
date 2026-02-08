import { EpsteinSearch } from "@/components/epstein-search";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Shadepstein
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Search through the Epstein files
          </p>
        </div>
        <EpsteinSearch />
      </div>
    </main>
  );
}
