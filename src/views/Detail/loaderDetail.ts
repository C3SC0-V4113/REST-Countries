import API from "@/api/apiServices";

const bordersName = async (bordersCode: string[] | undefined) => {
  let borders: string[] = [];
  const bordersTranslated = bordersCode?.map(async (border) => {
    const { data } = await API.countries.getNameByCode(border);
    return data.name.common;
  });

  if (bordersTranslated) {
    await Promise.all(bordersTranslated).then((results) => {
      borders = results;
    });
  } else {
    borders = [];
  }

  return borders;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loaderDetail = async ({ params }: { params: any }) => {
  try {
    const { data } = await API.countries.getCountryByName(params.countryName);
    const borders = await bordersName(data[0].borders);
    return {
      country: data[0],
      borders,
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
