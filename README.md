# Shadepstein

A custom themable ShadCN component that provides a stylized search box for the Epstein files.

## Features

✨ **Beautiful Design**: Modern, sleek search interface with smooth animations
🎨 **Themable**: Full ShadCN theming support with light/dark mode
🔍 **Interactive**: Focus states, hover effects, and visual feedback
🧹 **Clear Button**: Easy one-click clear functionality
📱 **Responsive**: Works perfectly on all screen sizes
⚡ **Fast**: Built with Next.js 16 and React 19

## Screenshots

### Light Mode
![Search Box - Light Mode](https://github.com/user-attachments/assets/e5133e94-dbd1-4474-87c8-36d19ff6c69b)

### Focused State
![Search Box - Focused](https://github.com/user-attachments/assets/527d4899-d155-4d9d-82bc-720954ccc46b)

### With Search Results
![Search Results](https://github.com/user-attachments/assets/215e8784-e7ab-4e9d-a752-4f6a36ea89ef)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/swatjester/shadepstein.git
cd shadepstein
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the basic component

5. Visit [http://localhost:3000/demo](http://localhost:3000/demo) to see the component with sample search functionality

## Usage

### Basic Usage

```tsx
import { EpsteinSearch } from "@/components/epstein-search";

export default function MyPage() {
  return (
    <div>
      <EpsteinSearch />
    </div>
  );
}
```

### With Search Functionality

```tsx
"use client";

import { useState } from "react";
import { EpsteinSearch } from "@/components/epstein-search";

export default function SearchPage() {
  const [results, setResults] = useState([]);

  const handleSearch = (query: string) => {
    // Implement your search logic here
    const filtered = yourData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <EpsteinSearch
      onSearchChange={handleSearch}
      results={results}
    />
  );
}
```

## Component API

### EpsteinSearch Props

| Prop | Type | Description |
|------|------|-------------|
| `onSearchChange` | `(value: string) => void` | Callback fired when search input changes |
| `results` | `Array<{id: string, title: string, excerpt?: string}>` | Array of search results to display |
| `...props` | `InputHTMLAttributes` | All standard HTML input attributes |

## Theming

The component uses CSS custom properties for theming. You can customize colors by modifying the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  /* ... more variables */
}

.dark {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... dark mode variables */
}
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **ShadCN UI** - Component architecture

## Development

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

Run linter:
```bash
npm run lint
```

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
