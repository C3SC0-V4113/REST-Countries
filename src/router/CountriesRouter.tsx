import { Home } from "@/views/Home";
import { Layout } from "@/views/Layout";
import { createBrowserRouter } from "react-router-dom";

export const CountriesRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
