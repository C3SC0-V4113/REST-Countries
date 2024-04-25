import API from "@/api/apiServices";
import { Country } from "@/contracts/types/TCountry";

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

export const loaderHome = async ({
  request,
}: {
  request: {
    url: string;
  };
}) => {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country");
  const continent = searchParams.get("continent");
  const params = {
    country,
    continent,
  };
  try {
    if (continent && continent != "all") {
      const { data } = await API.countries.getCountriesByRegion(continent);
      return { countries: filteredCountries(data, country), params };
    }

    const { data } = await API.countries.getAllCountries();
    return { countries: filteredCountries(data, country), params };
  } catch (error) {
    console.error(error);
  }
};
