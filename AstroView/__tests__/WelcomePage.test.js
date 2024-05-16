import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WellcomePage from "../src/pages/WellcomePage";

test("renders without crashing", () => {
  render(<WellcomePage />);
});

test("clicking on mobile menu button should open the menu", () => {
  const { getByRole, getAllByText } = render(<WellcomePage />);

  const mobileMenuButton = getByRole("button", { name: "Open main menu" });
  fireEvent.click(mobileMenuButton);

  const registerLinks = getAllByText("Register");
  expect(registerLinks.length).toBeGreaterThan(0);
});
