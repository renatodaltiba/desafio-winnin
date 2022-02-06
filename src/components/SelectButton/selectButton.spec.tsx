import { SelectButton } from ".";

import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme/dark";

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

describe("SelectButton Component", () => {
  it("renders correctly", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <SelectButton onClick={onClick} selected={true} title="hot" />,
      {
        wrapper: Providers,
      }
    );
    expect(getByText("hot")).toBeInTheDocument();
  });

  it("when the property is true, the background will be primary", () => {
    const onClick = jest.fn();
    const wrapper = render(
      <SelectButton onClick={onClick} selected={true} title="hot" />,
      {
        wrapper: Providers,
      }
    );

    expect(wrapper.getByText("hot")).toHaveStyle(
      `background-color: ${darkTheme.COLORS.PRIMARY}`
    );
  });

  it("If the selected property comes as false make the background theme gray", () => {
    const onClick = jest.fn();
    const wrapper = render(
      <SelectButton onClick={onClick} selected={false} title="hot" />,
      {
        wrapper: Providers,
      }
    );

    expect(wrapper.getByText("hot")).toHaveStyle(
      `background-color: ${darkTheme.COLORS.GRAY}`
    );
  });
});
