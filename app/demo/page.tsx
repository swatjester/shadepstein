"use client";

import { useState } from "react";
import { EpsteinSearch } from "@/components/epstein-search";

// Sample data for demonstration
const SAMPLE_FILES = [
  {
    id: "1",
    title: "Flight Log - January 2002",
    excerpt: "Detailed passenger manifest and flight records from private aircraft...",
  },
  {
    id: "2",
    title: "Little St. James Island Documents",
    excerpt: "Property records, visitor logs, and maintenance schedules for the private island...",
  },
  {
    id: "3",
    title: "Financial Transaction Records",
    excerpt: "Bank statements and wire transfer documentation showing monetary flows...",
  },
  {
    id: "4",
    title: "Address Book and Contact Lists",
    excerpt: "Comprehensive directory of associates, business contacts, and acquaintances...",
  },
  {
    id: "5",
    title: "Court Deposition Transcripts",
    excerpt: "Legal testimony and witness statements from various court proceedings...",
  },
];

export default function DemoPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof SAMPLE_FILES>([]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    
    // Simple search implementation
    if (value.trim()) {
      const filtered = SAMPLE_FILES.filter(
        (file) =>
          file.title.toLowerCase().includes(value.toLowerCase()) ||
          file.excerpt.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

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
        <EpsteinSearch
          onSearchChange={handleSearchChange}
          results={searchResults}
        />
      </div>
    </main>
  );
}
