import { Spinner } from ".";

import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme/dark";

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

describe("SelectButton Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Spinner />, {
      wrapper: Providers,
    });

    const circles = container.querySelectorAll("circle");
    expect(circles.length).toBe(1);
  });
});
