import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import '@testing-library/jest-dom';

it('Checks if the component is being changed', () => {
  const docTree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(docTree).toMatchSnapshot();
});
it('Check if the component navbar container is existing', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );
  const nav = await screen.findByTestId('nav');
  expect(nav).toBeInTheDocument();
});
