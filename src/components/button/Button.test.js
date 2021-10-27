import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders button with a text", () => {
  render(<Button>Test</Button>);

  const buttonEl = screen.getByText("Test");

  expect(buttonEl).toBeInTheDocument();
});
