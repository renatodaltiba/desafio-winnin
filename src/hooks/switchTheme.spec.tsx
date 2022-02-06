import { renderHook, act } from "@testing-library/react-hooks";

import { SwitchThemeProvider, useSwitchTheme } from "./switchTheme";
describe("SwitchTheme Hook", () => {
  it("if the theme is changing correctly", () => {
    const { result } = renderHook(() => useSwitchTheme(), {
      wrapper: SwitchThemeProvider,
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme.TITLE).toBe("dark");

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme.TITLE).toBe("light");
  });
});
