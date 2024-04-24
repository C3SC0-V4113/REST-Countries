import API from "@/api/apiServices";
import { Home } from "@/views/Home";
import { Layout } from "@/views/Layout";
import { createBrowserRouter } from "react-router-dom";

const loaderHome = async () => {
  try {
    const { data } = await API.countries.getAllCountries();
    return { countries: data };
  } catch (error) {
    console.error(error);
  }
};

export const CountriesRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderHome,
      },
    ],
  },
]);
