import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../../app/components/SearchBar';

describe('SearchBar', () => {
  it('renders the Mercado Libre logo', () => {
    render(<SearchBar />);
    const logo = screen.getByAltText('Mercado Libre Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the search input with placeholder', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Nunca dejes de buscar');
    expect(searchInput).toBeInTheDocument();
  });
});
