import { createContext, useState, type ReactNode } from "react";

interface AppContextType {
  states: string;
  setStates: (value: string) => void;
  district: string;
  setDistrict: (value: string) => void;
}



export const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [states, setStates] = useState<string>('');
  const [district, setDistrict] = useState<string>('');

  const value: AppContextType = { states, setStates, district, setDistrict }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
