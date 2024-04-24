import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export const FormHome = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 px-4 py-2 rounded bg-primary text-primary-foreground">
        <IoMdSearch className="w-6 h-6 my-auto" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full font-semibold bg-transparent border-none focus-visible:ring-0 focus-visible:border-0 focus-visible:ring-offset-0 placeholder:text-primary-foreground placeholder:font-semibold"
                      placeholder="Search for a country..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="hidden">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <Select onValueChange={(value) => console.log(value)}>
        <SelectTrigger className="w-[180px] font-semibold border-none">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Africa">Africa</SelectItem>
          <SelectItem value="Americas">Americas</SelectItem>
          <SelectItem value="Antarctic">Antarctic</SelectItem>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Europe">Europe</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
