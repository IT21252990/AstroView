import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Epic from "../src/pages/Epic";
import { AuthProvider } from "../src/contexts/AuthContext";

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue([]),
});

test("renders data when available", async () => {
  const testData = {
    title: "Test Title",
    date: "2024-05-05",
    explanation: "Test Explanation",
    url: "test.jpg",
  };

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(testData),
  });

  render(
    <Router>
      <AuthProvider>
        <Epic />
      </AuthProvider>
    </Router>
  );
});
