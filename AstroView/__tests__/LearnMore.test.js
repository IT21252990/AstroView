import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WellcomePage from "../src/pages/Learnmore";
import { AuthProvider } from "../src/contexts/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

test("renders without crashing", () => {
render(
    <Router>
      <AuthProvider>
        <WellcomePage />
      </AuthProvider>
    </Router>
  );
});