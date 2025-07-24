import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contactUs component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading"); // we are querying
  expect(heading).toBeInTheDocument(); // Assertion
});

test("should load button inside contactUs component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should load button inside contactUs component type-2", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("should load input name inside contactUs component", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");
  expect(inputName).toBeInTheDocument();
});

test("should load 2 input boxes inside contactUs component", () => {
  render(<Contact />);
  const inputBox = screen.getAllByRole("textbox");
  expect(inputBox.length).toBe(2);
});
