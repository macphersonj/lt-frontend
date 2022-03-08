import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { Profile } from "./Components/Profile";
import { BrandBar } from "./Components/BrandBar.js";

afterEach(cleanup);

test("renders learn react link", () => {
  render(<App />);
});

test("Profile renders", () => {
  render(<Profile />);

  const profile = screen.getByTestId("userProfile");
  expect(profile).toBeInTheDocument();
});

test("Logo renders on screen", () => {
  render(<BrandBar />);

  const logo = screen.getByTestId("linktreeLogo");
  expect(logo).toBeInTheDocument();
});

// Proper test coverage needed, mock fetching data, clicking link types and their different behaviour
