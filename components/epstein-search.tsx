"use client";

import * as React from "react";
import { Search, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EpsteinSearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'results'> {
  onSearchChange?: (value: string) => void;
  results?: Array<{ id: string; title: string; excerpt?: string }>;
}

const EpsteinSearch = React.forwardRef<HTMLInputElement, EpsteinSearchProps>(
  ({ className, onSearchChange, results = [], ...props }, ref) => {
    const [value, setValue] = React.useState("");
    const [isFocused, setIsFocused] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onSearchChange?.(newValue);
    };

    const handleClear = () => {
      setValue("");
      onSearchChange?.("");
    };

    return (
      <div className="w-full space-y-4">
        <div
          className={cn(
            "relative group",
            "transition-all duration-200 ease-in-out",
            isFocused && "scale-[1.02]"
          )}
        >
          {/* Search Input Container */}
          <div
            className={cn(
              "relative flex items-center",
              "rounded-lg border-2",
              "bg-card shadow-lg",
              "transition-all duration-200",
              isFocused
                ? "border-primary shadow-xl ring-4 ring-primary/10"
                : "border-border hover:border-primary/50 shadow-md",
              className
            )}
          >
            {/* Search Icon */}
            <div
              className={cn(
                "absolute left-4 pointer-events-none",
                "transition-all duration-200",
                isFocused ? "text-primary scale-110" : "text-muted-foreground"
              )}
            >
              <Search className="h-5 w-5" />
            </div>

            {/* Input Field */}
            <input
              ref={ref}
              type="text"
              value={value}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                "flex-1 w-full",
                "px-12 py-4",
                "text-lg font-medium",
                "bg-transparent",
                "text-foreground placeholder:text-muted-foreground",
                "focus:outline-none",
                "transition-all duration-200"
              )}
              placeholder="Search Epstein files..."
              {...props}
            />

            {/* Clear Button */}
            {value && (
              <button
                type="button"
                onClick={handleClear}
                className={cn(
                  "absolute right-4",
                  "p-1 rounded-full",
                  "text-muted-foreground hover:text-foreground",
                  "hover:bg-muted",
                  "transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )}
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Decorative Elements */}
          <div
            className={cn(
              "absolute -inset-1 -z-10",
              "rounded-lg",
              "bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20",
              "opacity-0 blur-xl",
              "transition-opacity duration-300",
              isFocused && "opacity-100"
            )}
          />
        </div>

        {/* Search Results */}
        {value && results.length > 0 && (
          <div className="space-y-2 animate-in fade-in-50 slide-in-from-top-2">
            <p className="text-sm text-muted-foreground px-2">
              {results.length} result{results.length !== 1 ? "s" : ""} found
            </p>
            <div className="space-y-2">
              {results.map((result) => (
                <div
                  key={result.id}
                  className={cn(
                    "p-4 rounded-lg",
                    "bg-card border border-border",
                    "hover:border-primary hover:shadow-md",
                    "transition-all duration-200",
                    "cursor-pointer group"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {result.title}
                      </h3>
                      {result.excerpt && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {result.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results State */}
        {value && results.length === 0 && (
          <div className="text-center py-8 text-muted-foreground animate-in fade-in-50">
            <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No files found for &quot;{value}&quot;</p>
            <p className="text-sm mt-1">Try a different search term</p>
          </div>
        )}
      </div>
    );
  }
);

EpsteinSearch.displayName = "EpsteinSearch";

export { EpsteinSearch };
