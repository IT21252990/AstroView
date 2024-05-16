import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../src/components/Header';

// Mock the useAuth hook
jest.mock('../src/contexts/AuthContext', () => ({
  useAuth: () => ({
    userLoggedIn: true,
    currentUser: { displayName: 'Test User', email: 'test@example.com' },
  }),
}));

describe('Header', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it('renders the logo and navigation links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if the logo is rendered
    expect(screen.getByAltText('AstroView')).toBeInTheDocument();

    // Check if navigation links are rendered
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('APOD')).toBeInTheDocument();
    expect(screen.getByText('GALLERY')).toBeInTheDocument();
    expect(screen.getByText('SEARCH')).toBeInTheDocument();
    expect(screen.getByText('MARS ROVER PHOTOS')).toBeInTheDocument();
    expect(screen.getByText('EPIC')).toBeInTheDocument();
  });

  // Add more test cases as needed to test other functionalities
});
