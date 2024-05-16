import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "../node_modules/@testing-library/jest-dom";
import SearchCard from "../src/components/SearchCard";

describe("SearchCard", () => {
  const mockData = {
    data: [
      {
        date_created: "2024-05-05T12:00:00",
        title: "Mock Title",
        description: "Mock Description",
      },
    ],
    links: [
      {
        href: "mock-url.jpg",
      },
    ],
  };

  test("opens dialog when clicked", () => {
    render(<SearchCard data={mockData} />);
    fireEvent.click(screen.getByText("Mock Title"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("closes dialog when close button is clicked", () => {
    render(<SearchCard data={mockData} />);
    fireEvent.click(screen.getByText("Mock Title"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Close panel/ }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
