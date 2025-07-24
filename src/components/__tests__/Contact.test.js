import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("should load contactUs component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
