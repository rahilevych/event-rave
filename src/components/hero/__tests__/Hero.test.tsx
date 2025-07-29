import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero section", () => {
  test("should display heading and img", () => {
    render(<Hero />);
    expect(screen.getByRole("img", { name: /hero/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /made for those who do/i }),
    ).toBeInTheDocument();
  });
});
