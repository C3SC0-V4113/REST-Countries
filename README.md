# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshots

![Desktop Image](/public/desktop_screenshot.png)

![Desktop Image](/public/mobile_screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- TypeScript
- Axios
- [React](https://reactjs.org/) - JS library
- [Redux](https://react-redux.js.org/) - React Redux
- [React-Router](https://reactrouter.com/en/main) - React Router Dom
- [Vite](https://vitejs.dev/) - Vite
- [Tailwind](https://tailwindcss.com/) - Tailwind
- [ShadCN Styled Components](https://ui.shadcn.com/) - For styles

### What I learned

I already knew how to implement a dark mode using ShadCn, and how to call an API using axios. However, something that was new to me was how to implement loaders using React Router Dom. That was new to me, and it is satisfying to see it working.

```js
export const loaderHome = async ({
  request,
}: {
  request: {
    url: string,
  },
}) => {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country");
  const continent = searchParams.get("continent");
  const params = {
    country,
    continent,
  };
  try {
    if (continent && continent != "all") {
      const { data } = await API.countries.getCountriesByRegion(continent);
      return { countries: filteredCountries(data, country), params };
    }

    const { data } = await API.countries.getAllCountries();
    return { countries: filteredCountries(data, country), params };
  } catch (error) {
    console.error(error);
  }
};
```

I also learned how to manage an object called from an API with great flexibility in its keys and values.

```js
useEffect(() => {
  for (const [, value] of Object.entrie(country.name.nativeName)) {
    setNativeName((prev) =>
      prev.includes(value.common) ? [..prev] : [...prev, value.common]
    );
  }
}, [country.name]);
```

### Continued development

I want to continue learning about React Router Dom, as well as the actions and loaders functionality. I aim to apply them to more complex interactions and implementations, including forms and validations.

### Useful resources

- [ShadCN error fixed](https://www.example.com) - This helped me because on mobile, the select component encountered an error when a clickable element was positioned underneath it. This resulted in the select item being clicked first, followed by the item below, disrupting the flow of the application in mobile mode.
- [React Router Dom Tutorial](https://reactrouter.com/en/main/start/tutorial) - This is an amazing tutorial for learning how to use React Router Dom with loaders and hooks.
- [ShadCn Tutorial](https://ui.shadcn.com/docs) - This is an amazing tutorial for learning how to use the Shadcn library and implementing dark mode and themes

## Author

- Website - [Francisco Valle](https://www.cescovalle.com/)
- Frontend Mentor - [@C3SC0-V4113](https://www.frontendmentor.io/profile/C3SC0-V4113)
- Twitter - [@c3_sc0](https://twitter.com/c3_sc0)

## Acknowledgments

- I got some routing and component ideas from a friend named Adilson Vasquez. I worked with him in the past, and he taught me a lot of things, such as organizing my API folder and using custom Hooks for each form.
