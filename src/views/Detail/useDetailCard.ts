import { CountryDetail } from "@/contracts/types/TCountry";
import { useEffect, useState } from "react";

export const useDetailCard = (country: CountryDetail) => {
  const [nativeName, setNativeName] = useState<string[]>([]);
  const [currenciesArray, setCurrenciesArray] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  if (country == null) throw new Error("Country not found");

  useEffect(() => {
    for (const [, value] of Object.entries(country.name.nativeName)) {
      setNativeName((prev) =>
        prev.includes(value.common) ? [...prev] : [...prev, value.common]
      );
    }
  }, [country.name]);

  useEffect(() => {
    if (country.currencies) {
      for (const [, value] of Object.entries(country.currencies)) {
        setCurrenciesArray((prev) =>
          prev.includes(value.name) ? [...prev] : [...prev, value.name]
        );
      }
    } else {
      setCurrenciesArray(["Unknown"]);
    }
  }, [country.currencies]);

  useEffect(() => {
    if (country.languages) {
      for (const [, value] of Object.entries(country.languages)) {
        setLanguages((prev) =>
          prev.includes(value) ? [...prev] : [...prev, value]
        );
      }
    } else {
      setLanguages(["Unknown"]);
    }
  }, [country.languages]);
  return {
    card: {
      nativeName,
      currencies: currenciesArray,
      languages,
      flags: {
        svg: country.flags.svg,
        alt: country.flags.alt,
      },
      commonName: country.name.common,
      population: new Intl.NumberFormat().format(country.population),
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      tld: country.tld,
    },
  };
};
