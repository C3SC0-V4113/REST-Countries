import { Country } from "@/contracts/types/TCountry";
import { axiosConfig } from "../axiosConfig";

export const getAllCountries = async () => {
  const fields = "name,region,capital,population,flags";
  const options = {
    params: {
      fields,
    },
  };
  return axiosConfig.get<Country[]>("/all", options);
};
