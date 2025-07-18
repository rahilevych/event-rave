import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header component on mobile", () => {
  beforeEach(() => {
    window.innerWidth = 425;
    window.dispatchEvent(new Event("resize"));
  });
  test("should show mobile menu", async () => {
    render(<Header />);
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});
describe("Header component on desktop", () => {
  beforeEach(() => {
    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
  });
  test("should show desktop menu", async () => {
    render(<Header />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});
