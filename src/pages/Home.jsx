import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/products";
import ProductCard from "../components/ProductCard";
import ProductCardShimmerUI from "../components/ProductCardShimmerUI";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const getProducts = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const data = await fetchProducts(products?.length);
    console.log(data);
    setIsLoading(false);
    if (data?.products) {
      setProducts((products) => [...products, ...data.products]);
      setTotalItems(data?.total);
    }
  };

  const handleScroll = () => {
    if (isLoading) return;
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50 &&
      totalItems > products?.length
    ) {
      console.log("Feching more data...");

      getProducts();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const debounceScroll = () => {
      setTimeout(handleScroll, 300); // Debounce the scroll event
    };

    document.addEventListener("scroll", debounceScroll);

    return () => {
      document.removeEventListener("scroll", debounceScroll);
    };
  }, [isLoading]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-500">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
        {isLoading &&
          Array(10)
            .fill(0)
            ?.map((_, i) => {
              return <ProductCardShimmerUI key={i} />;
            })}
      </div>
      {totalItems === products?.length && (
        <p className="p-2 py-4 text-center">You have reached the end</p>
      )}
    </div>
  );
};

export { HomePage };
