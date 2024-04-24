import { FormHome } from "./FormHome";
import { useHome } from "./useHome";

export const Home = () => {
  const { countries } = useHome();

  return (
    <div className="flex flex-col gap-4">
      <FormHome />
      <div className="grid grid-cols-1">
        {countries?.map((country, index) => (
          <div key={index}>{country.capital}</div>
        ))}
      </div>
    </div>
  );
};
