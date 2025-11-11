import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import API from "./src/utils/Api";

export interface Products {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  bestSeller: boolean;
  createdAt: string;
}
export interface CartItem extends Products {
  size: string;
  quantity: number;
  createdAt: string;
}

interface ContextType {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  subTotal: number;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
  isUserDetailOpen: boolean;
  setIsUserDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPasswordHidden: Boolean;
  setIsPasswordHidden: React.Dispatch<React.SetStateAction<boolean>>;
  togglePassword: () => void
}
const GlobalContext = createContext<ContextType | undefined>(undefined);

export const GlobalProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(savedCartItems);
  const [products, setProducts] = useState<Products[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [isUserDetailOpen, setIsUserDetailOpen] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(products);

  useEffect(() => {
    setSubTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
  const togglePassword = () => {
    setIsPasswordHidden(!isPasswordHidden)
  }

  return (
    <GlobalContext.Provider
      value={{
        isDropdownOpen,
        setIsDropdownOpen,
        isSearchBarOpen,
        setIsSearchBarOpen,
        cartItems,
        setCartItems,
        products,
        setProducts,
        subTotal,
        setSubTotal,
        isUserDetailOpen,
        setIsUserDetailOpen,
        isPasswordHidden,
        setIsPasswordHidden,
        togglePassword
      }}
    >
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
