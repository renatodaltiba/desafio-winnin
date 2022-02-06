import { ConfirmButton } from ".";

import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme/dark";

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

describe("ConfirmButton Component", () => {
  it("renders correctly", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ConfirmButton
        onClick={onClick}
        lastPage={false}
        nextPageLoading={false}
      />,
      {
        wrapper: Providers,
      }
    );
    expect(getByText("View more")).toBeInTheDocument();
  });

  it("if when its coming its the last page it shows another text", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ConfirmButton onClick={onClick} lastPage nextPageLoading={false} />,
      {
        wrapper: Providers,
      }
    );
    expect(getByText("last page reached")).toBeInTheDocument();
  });
});
