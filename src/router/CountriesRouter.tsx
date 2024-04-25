import API from "@/api/apiServices";
import { Country } from "@/contracts/types/TCountry";
import { Home } from "@/views/Home";
import { Layout } from "@/views/Layout";
import { createBrowserRouter } from "react-router-dom";

const filteredCountries = (
  countries: Country[],
  countryName?: string | null
) => {
  if (!countryName) {
    return countries;
  }
  const re = new RegExp(`${countryName.trim().toLowerCase()}`);
  return countries.filter((country) => {
    return (
      re.test(country.name.common.trim().toLowerCase()) ||
      re.test(country.name.official.trim().toLowerCase())
    );
  });
};

const loaderHome = async ({ request }) => {
  const url = new URL(request.url);
  const country = url.searchParams.get("country");
  const continent = url.searchParams.get("continent");
  const params = {
    country,
    continent,
  };
  try {
    if (params.continent && params.continent != "all") {
      const { data } = await API.countries.getCountriesByRegion(
        params.continent
      );

      return { countries: filteredCountries(data, country), params };
    } else {
      const { data } = await API.countries.getAllCountries();
      return { countries: filteredCountries(data, country), params };
    }
  } catch (error) {
    console.error(error);
  }
};

export const CountriesRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderHome,
      },
    ],
  },
]);
