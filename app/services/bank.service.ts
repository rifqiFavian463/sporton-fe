import { fetchAPI } from "../lib/api";
import { Bank } from "../types";

const getAllBanks = async (): Promise<Bank[]> => {
  return await fetchAPI<Bank[]>("/banks");
};

export { getAllBanks };
