import { CountryDetail } from "@/contracts/types/TCountry";
import { axiosConfig } from "../axiosConfig";

export const getCountryByName = async (countryName: string) => {
  const fields =
    "name,region,capital,population,flags,subregion,languages,currencies,tld,borders";
  const options = {
    params: {
      fields,
    },
  };

  return axiosConfig.get<CountryDetail[]>(`/name/${countryName}`, options);
};
