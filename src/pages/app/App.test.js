import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders the app with a button, a quote and a image", () => {
  render(<App />);

  const imageEl = screen.getByRole("img");

  expect(imageEl).toBeInTheDocument();
});
