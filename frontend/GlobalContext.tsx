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

const GlobalContext = () => {
  return <div>GlobalContext</div>;
};

export default GlobalContext;
