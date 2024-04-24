import API from "@/api/apiServices";
import { Country } from "@/contracts/types/TCountry";
import { useEffect, useState } from "react";

export const useHome = () => {
  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const { data } = await API.countries.getAllCountries();
      //   console.log(data);
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    countries,
  };
};
