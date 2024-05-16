import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Home from "../src/pages/Home";
import { AuthProvider } from "../src/contexts/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home Component", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </Router>
    );
  });
});
