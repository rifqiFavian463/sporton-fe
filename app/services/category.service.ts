import { fetchAPI } from "../lib/api";
import { Category } from "../types";

const getAllCategories = async (): Promise<Category[]> => {
  return await fetchAPI<Category[]>("/categories");
};

export { getAllCategories };
