import { render, screen } from "@testing-library/react";
import { Button } from "../Button/Button.tsx";
import { MdPerson } from "react-icons/md";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  test("should render button with text correctly", () => {
    render(<Button>Test button</Button>);
    expect(
      screen.getByRole("button", { name: /test button/i }),
    ).toBeInTheDocument();
  });
  test("should render button with icon correctly", () => {
    render(
      <Button>
        <MdPerson data-testid="icon" />
      </Button>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
  test("should render button with onClick correctly", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick}>
        <MdPerson data-testid="icon" />
      </Button>,
    );
    const button = screen.getByRole("button");
    await user.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
