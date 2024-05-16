import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import '../node_modules/@testing-library/jest-dom';
import { act } from 'react-dom/test-utils'; 
import RoverImageCard from '../src/components/RoverImageCard';

describe('RoverImageCard', () => {
  const mockData = {
    img_src: 'https://example.com/image.jpg',
    earth_date: '2024-05-05',
    camera: {
      full_name: 'Example Camera',
    },
    rover: {
      name: 'Example Rover',
    },
  };

  test('renders component with provided data', () => {
    render(<RoverImageCard data={mockData} />);

    expect(screen.getByText(`${mockData.camera.full_name} - ${mockData.rover.name}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('opens dialog on click', () => {
    render(<RoverImageCard data={mockData} />);

    const imageElement = screen.getByRole('img', { src: mockData.img_src }); 

    act(() => {
        fireEvent.click(imageElement);
      });
    // Find dialog content
    const dialogContent = screen.getByRole('dialog');

  });
});
