import { SwitchThemeProvider } from "@hooks/switchTheme";
import { darkTheme } from "@styles/theme/dark";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Post } from ".";

const data = [
  {
    thumbnail: "test-thumbnail",
    title: "The teste's life",
    author: "John_Doe",
    url: "https://johndoe.blogspot.com",
    domain: "blogspot.com",
    created_utc: 2312322,
    thumbnail_width: 0,
    id: "test-id",
  },
];

const Providers: React.FC = ({ children }) => {
  return (
    <SwitchThemeProvider>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </SwitchThemeProvider>
  );
};

describe("Post item", () => {
  it("should render correctly", () => {
    const itemTest = render(<Post data={data[0]} />, {
      wrapper: Providers,
    });
    expect(itemTest.getByText("John_Doe")).toBeInTheDocument();
    expect(itemTest.getByText("The teste's life")).toBeInTheDocument();
    expect(itemTest.getByText("enviado há 52 anos por")).toBeInTheDocument();
  });

  it("after clicking on domain redirect to reddit post", () => {
    const itemTest = render(<Post data={data[0]} />, {
      wrapper: Providers,
    });
    expect(itemTest.getByText("blogspot.com").closest("a")).toHaveAttribute(
      "href",
      "https://johndoe.blogspot.com"
    );
  });

  it("after clicing on a user link redirect to user profile", () => {
    const itemTest = render(<Post data={data[0]} />, {
      wrapper: Providers,
    });
    expect(itemTest.getByText("John_Doe").closest("a")).toHaveAttribute(
      "href",
      "https://www.reddit.com/user/John_Doe/"
    );
  });
});
