import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Apod from "../src/pages/Apod";
import { AuthProvider } from "../src/contexts/AuthContext";

describe("Apod component", () => {
  test("renders data is correctly", () => {
    render(
      <Router>
        <AuthProvider>
          <Apod />
        </AuthProvider>
      </Router>
    );
  });

  test("renders data when available", async () => {
    const testData = {
      title: "Test Title",
      date: "2024-05-05",
      explanation: "Test Explanation",
      url: "test.jpg",
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    render(
      <Router>
        <AuthProvider>
          <Apod />
        </AuthProvider>
      </Router>
    );
  });
});
