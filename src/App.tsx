import { IoMdMoon } from "react-icons/io";
import { Button } from "./components/ui/button";
import { useEffect } from "react";
import { useUiStore } from "./hooks/useUiStore";

function App() {
  const { checkTheme, theme, toggleTheme } = useUiStore();

  useEffect(() => {
    checkTheme();
  }, [checkTheme, theme]);

  return (
    <>
      <div className="bg-primary shadow-sm p-4 md:px-8 text-primary-foreground flex justify-between align-middle">
        <h1 className="text-base md:text-lg font-bold">Where in the world?</h1>
        <Button
          onClick={() => toggleTheme()}
          variant={"ghost"}
          className="flex gap-1"
        >
          <IoMdMoon className="my-auto" />
          <span className="font-semibold">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </Button>
      </div>
      <div className="bg-background text-background-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-primary text-primary-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-popover text-popover-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-card text-card-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-secondary text-secondary-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-muted text-muted-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-accent text-accent-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-destructive text-destructive-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}

export default App;
