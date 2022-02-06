import { darkTheme } from "@styles/theme/dark";
import { lightTheme } from "@styles/theme/light";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type SwitchThemeContextData = {
  toggleTheme: () => void;
  theme: typeof lightTheme;
};

type SwitchThemeProviderProps = {
  children: ReactNode;
};

export const SwitchThemeContext = createContext({} as SwitchThemeContextData);

function SwitchThemeProvider({ children }: SwitchThemeProviderProps) {
  const usePersistedState = (key: string, initialValue: any) => {
    const [state, setState] = useState(initialValue);

    useEffect(() => {
      const value = localStorage.getItem(key);
      if (value) {
        setState(JSON.parse(value));
      }
    }, [key]);

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
  };

  const [theme, setTheme] = usePersistedState("theme", lightTheme);

  const toggleTheme = () => {
    setTheme(theme.TITLE === "light" ? darkTheme : lightTheme);
  };

  return (
    <SwitchThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </SwitchThemeContext.Provider>
  );
}

function useSwitchTheme() {
  const context = useContext(SwitchThemeContext);

  return context;
}

export { SwitchThemeProvider, useSwitchTheme };
