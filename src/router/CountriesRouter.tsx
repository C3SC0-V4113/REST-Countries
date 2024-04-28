import { Detail, ErrorDetail, loaderDetail } from "@/views/Detail";
import { ErrorHome, Home, loaderHome } from "@/views/Home";
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
        errorElement: <ErrorHome />,
        loader: loaderHome,
      },
      {
        path: "/:countryName",
        element: <Detail />,
        loader: loaderDetail,
        errorElement: <ErrorDetail />,
      },
    ],
  },
]);
