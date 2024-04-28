import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

export const ErrorDetail = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col gap-4 py-4 font-nunito text-primary-foreground">
      <h1 className="text-lg font-extrabold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{(error as Error).message}</p>
      <Link to={"/"}>
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
};
