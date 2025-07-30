import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Multiple way to test

  // const loginButton = screen.getByRole("button"); // way 1: role is a good way, if you can't get by role then go for text

  // const loginButton = screen.getByText("Login"); // way 2

  const loginButton = screen.getByRole("button", { name: "Login" }); // way 3: use name for specific button

  expect(loginButton).toBeInTheDocument();
});

test("Should render header component with Cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItems = screen.getByText("Cart (0)"); // not a good way

  const cartItems = screen.getByText(/Cart/); // use regex

  expect(cartItems).toBeInTheDocument();
});

test("Should change login button to logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
