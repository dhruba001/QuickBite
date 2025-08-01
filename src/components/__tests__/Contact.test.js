import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    console.log("It will run before all tests");
  });

  beforeEach(() => {
    console.log("It will run before each tests");
  });

  afterAll(() => {
    console.log("It will run after all tests");
  });

  afterEach(() => {
    console.log("It will run after each tests");
  });

  // all test cases at one block
  test("should load contactUs component", () => {
    // start test case description with a should
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

  it("should load 2 input boxes inside contactUs component", () => {
    // both test and it are same, both are same
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);
  });
});
