import {
  render,
  screen,
  within,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SwitchThemeProvider } from "@hooks/switchTheme";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "@styles/theme/dark";

import Index from "@pages/index";
import { act } from "react-test-renderer";
import { shallow } from "enzyme";

const Providers: React.FC = ({ children }) => {
  return (
    <SwitchThemeProvider>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </SwitchThemeProvider>
  );
};

describe("Home Page", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Index />, {
      wrapper: Providers,
    });
    expect(getByText("REACT")).toBeInTheDocument();
  });

  // let wrapper: any;

  // beforeEach(() => {
  //   wrapper = shallow(<Index />);
  // });

  it("should render posts", async () => {
    // const postsAPI = {
    //   data: {
    //     children: [
    //       {
    //         data: {
    //           thumbnail: "FAKE-TEST",
    //           title: "FAKE-TEST",
    //           author: "FAKE-TEST",
    //           url: "FAKE-TEST",
    //           domain: "FAKE-TEST",
    //           created_utc: 20000,
    //           thumbnail_width: 200,
    //           id: "FAKE-TEST",
    //         },
    //       },
    //     ],
    //   },
    // };

    render(<Index />, {
      wrapper: Providers,
    });

    await waitForElementToBeRemoved(() => screen.getByRole("spinner"));

    // wrapper.setState({
    //   posts: postsAPI.data.children,
    // });

    // expect(wrapper.findByRole("post").length).toBe(8);

    const posts = screen.getByRole("posts-list");

    expect(await within(posts).findAllByRole("post")).toHaveLength(8);
  });

  it("view more after click", async () => {
    render(<Index />, {
      wrapper: Providers,
    });

    await waitForElementToBeRemoved(() => screen.getByRole("spinner"));

    const posts = screen.getByRole("posts-list");

    userEvent.click(screen.getByRole("confirm-button"));

    await waitForElementToBeRemoved(() => screen.getByRole("spinner"));

    expect(await within(posts).findAllByRole("post")).toHaveLength(16);
  });
});
