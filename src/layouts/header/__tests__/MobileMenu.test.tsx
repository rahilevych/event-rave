import { render, screen, waitFor } from "@testing-library/react";
import { MobileMenu } from "../MobileMenu.tsx";
import { userEvent } from "@testing-library/user-event";

describe("MobileMenu", () => {
  const user = userEvent.setup();

  test(" should render user icon as a button of menu", () => {
    render(<MobileMenu />);
    expect(screen.getByTestId("person-icon")).toBeInTheDocument();
  });
  test("should show menu if user click on person icon", async () => {
    render(<MobileMenu />);
    await user.click(screen.getByTestId("person-icon"));
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
  });
  test("should close menu if user click on close icon", async () => {
    render(<MobileMenu />);
    await user.click(screen.getByTestId("person-icon"));
    await user.click(screen.getByTestId("close-icon"));
    await waitFor(() => {
      expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
      expect(screen.queryByTestId("close-icon")).not.toBeInTheDocument();
      expect(screen.getByTestId("person-icon")).toBeInTheDocument();
    });
  });
  test("should close menu if user click outside", async () => {
    render(<MobileMenu />);
    await user.click(screen.getByTestId("person-icon"));
    await user.pointer([
      { target: screen.getByTestId("mobile-menu"), keys: "[MouseLeft]" },
    ]);
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
    await user.pointer([{ target: document.body, keys: "[MouseLeft]" }]);
    expect(screen.getByTestId("person-icon")).toBeInTheDocument();
  });
});
