import API from "@/api/apiServices";

export const loaderDetail = async ({ request, params }) => {
  try {
    const { data } = await API.countries.getCountryByName(params.countryName);
    return {
      country: data[0],
      status: {
        ok: true,
        message: null,
      },
    };
  } catch (error) {
    return {
      country: null,
      status: {
        ok: false,
        message: error,
      },
    };
  }
};
