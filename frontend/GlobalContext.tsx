import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";

interface Products {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  bestSeller: boolean;
  date: string;
}
interface ContextType {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const GlobalContext = createContext<ContextType | undefined>(undefined);

export const GlobalProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  return (
    <GlobalContext.Provider value={{ isDropdownOpen, setIsDropdownOpen, isSearchBarOpen, setIsSearchBarOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
