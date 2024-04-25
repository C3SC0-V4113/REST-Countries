import { useLoaderData } from "react-router-dom";
import { CountryCard } from "./CountryCard";
import { FormHome } from "./FormHome";
import { Country } from "../../contracts/types/TCountry";

type CountriesLoader = {
  countries: Country[];
  params: {
    country?: string;
    continent?: string;
  };
};

export const Home = () => {
  const { countries, params } = useLoaderData() as CountriesLoader;

  return (
    <div className="flex flex-col gap-8">
      <FormHome params={params} />
      <div className="grid grid-cols-1 gap-8">
        {countries?.map((country, index) => (
          <CountryCard
            key={index}
            capital={country.capital}
            image={country.flags.png}
            name={country.name.official}
            population={country.population}
            region={country.region}
          />
        ))}
      </div>
    </div>
  );
};
