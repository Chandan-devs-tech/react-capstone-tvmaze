import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CardsContainer from '../components/CardsContainer';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('CardsContainer test', () => {
  const the100 = {
    name: 'The 100',
    id: 4,
  };
  it('It checks that the component is changed', () => {
    const myTree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <CardsContainer
              key={the100.id}
              id={the100.id}
              name={the100.name}
            />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(myTree).toMatchSnapshot();
  });
});
