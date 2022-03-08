import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import { Profile } from "./Components/Profile";
import "@testing-library/jest-dom";

afterEach(cleanup);

test("renders learn react link", () => {
  render(<App />);
});

test("Profile renders", () => {
  render(<Profile />);

  const profile = screen.getByTestId("userProfile");
  expect(profile).toBeInTheDocument();
});
