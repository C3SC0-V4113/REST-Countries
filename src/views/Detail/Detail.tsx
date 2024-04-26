import { Button } from "@/components/ui/button";
import { CountryDetail } from "@/contracts/types/TCountry";
import { useLoaderData } from "react-router-dom";
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
        <div className="flex gap-4 px-1">
          <IoMdArrowBack className="my-auto text-lg" />
          Back
        </div>
      </Button>
      <DetailCard card={card} borders={borders} />
    </div>
  );
};
