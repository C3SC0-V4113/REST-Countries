import { Button } from "@/components/ui/button";
import { Region } from "@/contracts/types/TCountry";

interface Props {
  card: {
    nativeName: string[];
    currencies: string[];
    languages: string[];
    flags: {
      svg: string;
      alt: string;
    };
    commonName: string;
    population: string;
    region: Region;
    subregion: string | undefined;
    capital: string[];
    tld: string[] | undefined;
  };
  borders: string[];
}

export const DetailCard = ({ card, borders }: Props) => {
  const {
    currencies,
    languages,
    nativeName,
    flags,
    commonName,
    population,
    capital,
    region,
    subregion,
    tld,
  } = card;
  return (
    <div className="grid grid-cols-1 gap-10 mt-10 font-nunito lg:grid-cols-2">
      <img
        className="w-full h-auto col-span-1 mx-auto max-w-96 lg:my-auto"
        src={flags.svg}
        alt={`img-${flags.alt}`}
      />
      <div className="flex flex-col col-span-1 gap-8 md:my-auto">
        <h1 className="text-xl font-extrabold">{commonName}</h1>
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">Native Name: </span>
            {nativeName.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Population: </span>
            {population}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">Subregion: </span>
            {subregion}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">Top Level Domain: </span>
            {tld}
          </p>
          <p>
            <span className="font-semibold">Currencies: </span>
            {currencies.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Languages: </span>
            {languages.join(", ")}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold">Border Countries:</h2>
          <div className="grid grid-cols-2 gap-4 mt-2 md:grid-cols-3 xl:grid-cols-4">
            {borders.map((border, index) => (
              <Button key={index} className="col-span-1">
                {border}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
