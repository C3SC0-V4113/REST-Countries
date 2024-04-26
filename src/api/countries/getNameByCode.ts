import { Name } from "@/contracts/types/TCountry";
import { axiosConfig } from "../axiosConfig";

export const getNameByCode = async (countryCode: string) => {
  const fields = "name";
  const options = {
    params: {
      fields,
    },
  };

  return axiosConfig.get<{ name: Name }>(`/alpha/${countryCode}`, options);
};
