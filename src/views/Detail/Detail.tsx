import { Button } from "@/components/ui/button";
import { CountryDetail } from "@/contracts/types/TCountry";
import { useLoaderData } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

export const Detail = () => {
  const { country } = useLoaderData() as { country: CountryDetail };
  const [nativeName, setNativeName] = useState<string[]>([]);
  const [currenciesArray, setCurrenciesArray] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

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
        setCurrenciesArray([...currenciesArray, value.name]);
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

  return (
    <div className="flex flex-col">
      <Button className="max-w-40">
        <div className="flex gap-4 px-1">
          <IoMdArrowBack className="my-auto text-lg" />
          Back
        </div>
      </Button>
      <div className="grid grid-cols-1 gap-10 mt-10">
        <img
          className="w-full h-auto col-span-1"
          src={country.flags.svg}
          alt={`img-${country.flags.alt}`}
        />
        <div className="flex flex-col col-span-1 gap-2">
          <h1>{country.name.common}</h1>
          <p>
            <span className="font-semibold">Native Name: </span>
            {nativeName.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Population: </span>
            {new Intl.NumberFormat().format(country.population)}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p>
            <span className="font-semibold">Subregion: </span>
            {country.subregion}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {country.capital}
          </p>
          <p className="mt-6">
            <span className="font-semibold">Top Level Domain: </span>
            {country.tld}
          </p>
          <p>
            <span className="font-semibold">Currencies: </span>
            {currenciesArray.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Languages: </span>
            {languages.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};