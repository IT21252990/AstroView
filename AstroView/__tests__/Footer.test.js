// Footer.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import '../node_modules/@testing-library/jest-dom';
import Footer from "../src/components/Footer";

describe("Footer", () => {
  it("renders the component correctly", () => {
    render(<Footer />);


    expect(screen.getByText("Nasa")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();

    
    expect(screen.getByText("Nasa").closest("a")).toHaveAttribute(
      "href",
      "https://www.nasa.gov/"
    );
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "/lern_more"
    );
    expect(screen.getByText("GitHub").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/IT21252990"
    );
    expect(screen.getByText("Contact").closest("a")).toHaveAttribute(
      "href",
      "mailto:kalingajayathilaka@gmail.com"
    );
  });
});
