import { Header } from ".";

import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme/dark";
import { SwitchThemeProvider } from "@hooks/switchTheme";

const Providers: React.FC = ({ children }) => {
  return (
    <SwitchThemeProvider>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </SwitchThemeProvider>
  );
};

describe("ConfirmButton Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Header />, {
      wrapper: Providers,
    });
    expect(getByText("REACT")).toBeInTheDocument();
  });
});
