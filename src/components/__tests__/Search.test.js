import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for burger text input ", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  //before search
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);
  // after search
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput"); // comes from body component
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard"); // comes from restaurant card
  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter top rated restaurant ", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // before filtering reasults
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(8);
  // after filtering
  const filterBtn = screen.getByRole("button", {
    name: "Top rated restaurant",
  });
  fireEvent.click(filterBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard"); // comes from restaurant card
  expect(cardsAfterFilter.length).toBe(2); // only 2 restaurant satiesfies the rating criteria in mock data not the ui [ live api ]
});
