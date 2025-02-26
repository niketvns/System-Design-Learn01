import { API_BASE_URL } from "../utils";

export const fetchProducts = async (currentProducts) => {
  console.log(currentProducts);

  try {
    const apiRes = await fetch(
      `${API_BASE_URL}/products?limit=20&skip=${currentProducts}`
    );
    const products = await apiRes.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};
