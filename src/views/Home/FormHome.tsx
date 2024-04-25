import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Form, useSubmit } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";

export const FormHome = ({
  params,
}: {
  params: {
    country?: string;
    continent?: string;
  };
}) => {
  const submit = useSubmit();
  return (
    <Form
      className="flex flex-col gap-8 lg:flex-row lg:justify-between"
      onChange={(event) => submit(event.currentTarget)}
    >
      <div className="flex gap-2 px-4 py-2 rounded bg-primary text-primary-foreground">
        <IoMdSearch className="w-6 h-6 my-auto" />
        <Input
          className="w-full font-semibold bg-transparent border-none lg:min-w-96 focus-visible:ring-0 focus-visible:border-0 focus-visible:ring-offset-0 placeholder:text-primary-foreground placeholder:font-semibold"
          type="text"
          name="country"
          placeholder="Search for a country..."
          defaultValue={params.country}
        />
      </div>
      <Select
        defaultValue={params.continent ? params.continent : ""}
        name="continent"
      >
        <SelectTrigger className="w-48 font-semibold border-none lg:min-w-60">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Continents</SelectItem>
          <SelectItem value="Africa">Africa</SelectItem>
          <SelectItem value="Americas">Americas</SelectItem>
          <SelectItem value="Antarctic">Antarctic</SelectItem>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Europe">Europe</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectContent>
      </Select>
    </Form>
  );
};
