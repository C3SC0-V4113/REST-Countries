import { Country } from "@/contracts/types/TCountry";
import { axiosConfig } from "../axiosConfig";

export const getCountriesByRegion = async (region: string) => {
  const fields = "name,region,capital,population,flags";
  const options = {
    params: {
      fields,
    },
  };
  return axiosConfig.get<Country[]>(`/region/${region}`, options);
};
