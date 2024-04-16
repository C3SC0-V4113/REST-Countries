import { useEffect } from "react";

import { IoMdMoon } from "react-icons/io";
import { Outlet } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useUiStore } from "@/hooks/useUiStore";

export const Layout = () => {
  const { checkTheme, theme, toggleTheme } = useUiStore();

  useEffect(() => {
    checkTheme();
  }, [checkTheme, theme]);

  return (
    <>
      <div className="flex justify-between p-4 align-middle shadow-sm bg-primary md:px-8 text-primary-foreground">
        <h1 className="my-auto text-base font-bold md:text-lg">
          Where in the world?
        </h1>
        <Button
          onClick={() => toggleTheme()}
          variant={"link"}
          className="flex gap-1 text-primary-foreground hover:no-underline"
        >
          <IoMdMoon className="my-auto" />
          <span className="font-semibold">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </Button>
      </div>
      <div className="p-4 bg-background text-foreground">
        <Outlet />
      </div>
    </>
  );
};
