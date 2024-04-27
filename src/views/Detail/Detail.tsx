import { Button } from "@/components/ui/button";
import { CountryDetail } from "@/contracts/types/TCountry";
import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useDetailCard } from "./useDetailCard";
import { DetailCard } from "./DetailCard";

export const Detail = () => {
  const { country, borders } = useLoaderData() as {
    country: CountryDetail;
    borders: string[];
  };

  const { card } = useDetailCard(country);

  return (
    <div className="flex flex-col p-4">
      <Button className="max-w-40">
        <Link to={".."}>
          <div className="flex gap-4 px-1">
            <IoMdArrowBack className="my-auto text-base font-nunito" />
            Back
          </div>
        </Link>
      </Button>
      <DetailCard card={card} borders={borders} />
    </div>
  );
};
