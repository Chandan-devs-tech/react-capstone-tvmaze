import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import CardDetails from '../components/CardDetails';
import '@testing-library/jest-dom/extend-expect';

const mockInitialState = {
  show: {
    shows: [
      {
        id: 1,
        name: 'The 100',
        time: '21:00',
        rating: 7.7,
        day: 'Friday',
        language: 'English',
        genres: ['Drama', 'Fantasy'],
      },
    ],
    isLoading: false,
    error: null,
  },
};

describe('CardDetail', () => {
  it('renders the component with show details', () => {
    const mockStore = configureMockStore([]);
    const store = mockStore(mockInitialState);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/show/1']}>
          <Routes>
            <Route path="/show/:id" element={<CardDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('The 100')).toBeInTheDocument();
    expect(screen.getByText('21:00')).toBeInTheDocument();
    expect(screen.getByText('7.7')).toBeInTheDocument();
    expect(screen.getByText('Friday')).toBeInTheDocument();
  });
});
