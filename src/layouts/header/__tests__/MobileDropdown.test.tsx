import { MobileDropdown } from "../MobileDropdown.tsx";
import { render, screen } from "@testing-library/react";

describe("MobileDropdown", () => {
  test("should render list", () => {
    render(<MobileDropdown />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  test("should render 2 list items", () => {
    render(<MobileDropdown />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});
