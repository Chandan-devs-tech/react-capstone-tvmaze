import { fetchShow } from '../redux/show/showSlice';
import store from '../redux/store';

describe('store', () => {
  test('This test is showing that data array in the state is empty', () => {
    const initialState = store.getState().show;
    expect(initialState).toEqual({ shows: [], error: undefined, loading: false });
  });
  test('this test show that the array in state is filled with data', async () => {
    await store.dispatch(fetchShow());
    const newState = store.getState().show;
    expect(newState.shows.length).toBeGreaterThan(4);
  });
});
