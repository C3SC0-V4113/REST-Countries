interface Props {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string | string[];
}

export const CountryCard = ({
  capital,
  image,
  name,
  population,
  region,
}: Props) => {
  return (
    <div className="flex flex-col col-span-1 text-sm rounded shadow shadow-background bg-primary text-primary-foreground">
      <img src={image} className="w-full rounded-t" alt={name} />
      <div className="flex flex-col p-8 px-6 font-nunito">
        <h2 className="mb-3 font-extrabold">{name}</h2>
        <p>
          <span className="font-semibold">Population:</span>{" "}
          {new Intl.NumberFormat().format(population)}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span>{" "}
          {typeof capital === "string" ? capital : capital.join(", ")}
        </p>
      </div>
    </div>
  );
};
