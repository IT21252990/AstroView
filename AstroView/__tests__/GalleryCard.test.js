import React from "react";
import { render, screen , fireEvent } from "@testing-library/react";
import '../node_modules/@testing-library/jest-dom';
import { act } from 'react-dom/test-utils'; 
import GalleryCard from "../src/components/GalleryCard";

// Mock data for testing
const testData = {
    title: 'Test Title',
    url: 'test-url.jpg',
    date: '2024-05-05',
    explanation: 'Test explanation text.',
  };

test('GalleryCard renders correctly and opens dialog on click', () => {
  render(<GalleryCard data={testData} />);
  
  // Check if GalleryCard renders correctly
  const titleElement = screen.getByText(testData.title);
  const imageElement = screen.getByRole('img', { src: testData.url }); 
  expect(titleElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  
  // Open the dialog by clicking
  act(() => {
    fireEvent.click(imageElement);
  });

  // Check if dialog is opened
  const dialogTitleElement = screen.getByText(testData.title, { selector: 'h2' });
  const dialogDateElement = screen.getByText(testData.date);
  const dialogExplanationElement = screen.getByText(testData.explanation);
  expect(dialogTitleElement).toBeInTheDocument();
  expect(dialogDateElement).toBeInTheDocument();
  expect(dialogExplanationElement).toBeInTheDocument();
});
