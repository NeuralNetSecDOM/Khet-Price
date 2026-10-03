# Khet Price

Khet Price is a modern React + TypeScript web application that allows users to view daily commodity prices across Indian states and districts. The app fetches real-time market data from the official Government of India API and presents it in a user-friendly, filterable, and searchable interface.

> **Project origin:** Khet Price is a fork of [MarketPrices](https://github.com/PrallavAggarwal/market-prices) by Prallav Aggarwal, rebranded and maintained by [NeuralNetSecDOM](https://github.com/NeuralNetSecDOM). Full credit for the original implementation goes to the original author.

## Features

- **Live Market Prices:** Fetches daily prices for commodities from government data.
- **State & District Filters:** Easily filter price records by state and district.
- **Commodity Insights:** Highlights the most and least expensive commodities for the selected region.
- **Responsive UI:** Built with Tailwind CSS for fast, mobile-friendly layouts.
- **Fast & Reliable:** Uses Vite for lightning-fast development and builds, and React Query for robust data fetching and caching.
- **Modern React Compiler:** Optimized with the new React Compiler for enhanced performance and reliability.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/NeuralNetSecDOM/Khet-Price.git
cd Khet-Price
npm install
```

### Development

```bash
npm run dev
```
Access the app at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Usage

1. **Select State & District:** Use the dropdown filters to choose a state and district from the available list.
2. **Search:** Click the "Search" button to fetch the latest market price data.
3. **View Table:** Browse commodity price records in the table. Columns include state, arrival date, commodity, district, market, max/min/modal prices.
4. **Commodity Insights:** See highlighted cards for the most and least expensive commodities in the selected region.

---

## API Summary

The app uses [Government of India's Open Data API](https://api.data.gov.in/) for market price data:

- **Endpoint:**  
  ```
  https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070
  ```
- **Parameters:**
  - `api-key`: API key for data.gov.in (public demo key included for development)
  - `format`: Response format, set to `json`
  - Filters:
    - `state.keyword`: State name (URL-encoded)
    - `district`: District name (URL-encoded)
    - `commodity`: Commodity name (optional)
- **Sample Request:**
  ```
  https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=YOUR_API_KEY&format=json&filters%5Bstate.keyword%5D=Uttar%20Pradesh&filters%5Bdistrict%5D=Saharanpur
  ```
- **Response:** Returns an array of records with fields for state, district, market, commodity, prices, and arrival date.

> **Note:** For production, you should request your own API key from [data.gov.in](https://data.gov.in/resources/api).

---

## Libraries & Tech Stack Summary

### **Frontend Framework**
- **React 19:** Fast and component-based UI library.
- **TypeScript:** Strong typing for safety and developer ergonomics.
- **Vite:** Lightning-fast dev server and bundler.

### **Styling**
- **Tailwind CSS 4:** Utility-first CSS for rapid and responsive styling.

### **Data Fetching**
- **@tanstack/react-query:** Handles async queries, caching, and background updates for API data.

### **State Management**
- **React Context:** Global state for filters (selected state and district).

### **Linting & Quality**
- **ESLint + TypeScript ESLint:** Enforces code quality and style.
- **eslint-plugin-react-hooks:** Ensures proper use of React hooks.

### **Build Tools**
- **Vite:** Modern build tool for fast hot module replacement and optimized production builds.

### **Other**
- **React Compiler:** Next-gen React optimizations for improved performance.
- **Babel:** Transpiles code for browser compatibility.

---

## File Structure

```
Khet-Price/
  ├── src/
  │   ├── components/         # React components (filtersBar, records)
  │   ├── context/            # React Context for app state
  │   ├── assets/             # Images and static assets
  │   ├── App.tsx             # Main app component
  │   ├── main.tsx            # App entry point
  │   ├── App.css             # Custom styles
  │   ├── index.css           # Tailwind and global styles
  ├── public/                 # Static files (if any)
  ├── package.json            # Project dependencies and scripts
  ├── vite.config.ts          # Vite build configuration
  ├── tsconfig*.json          # TypeScript configuration
  ├── .gitignore
  └── README.md               # Project documentation
```

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

This project is released under the [MIT License](LICENSE).

---

## Author

- **Original implementation:** [Prallav Aggarwal](https://github.com/PrallavAggarwal) — [MarketPrices](https://github.com/PrallavAggarwal/market-prices)
- **Current maintainer:** [NeuralNetSecDOM](https://github.com/NeuralNetSecDOM) — rebranded as Khet Price

---

## Acknowledgements

- Data sourced from [Government of India Open Data Portal](https://data.gov.in/)
- Built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).

